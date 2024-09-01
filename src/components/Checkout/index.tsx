import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { string as yupString, object as yupObject } from 'yup'

import Loader from '../Loader'
import Button from '../Button'
import { Container, Overlay } from '../Cart/styles'

import { open, cleanCart } from '../../store/reducers/cart'
import {
  closeDelivery,
  openPayment,
  closePayment,
  openConfirmation,
  closeConfirmation,
  openDelivery
} from '../../store/reducers/checkout'

import { RootReducer } from '../../store'

import { getTotalPrice, priceFormat } from '../../utils'

import { usePurchaseMutation } from '../../services/api'

// skipcq: JS-C1003
import * as S from './styles'

// Função para formatar o número do cartão de crédito em blocos de 4 dígitos
const formatCardNumber = (value: string) => {
  return value
    .replace(/\s?/g, '')
    .replace(/(\d{4})/g, '$1 ')
    .trim()
}

// Função para formatar o código de segurança do cartão de crédito para 3 dígitos
const formatSecurityCode = (value: string) => {
  return value.replace(/\D/g, '').slice(0, 3)
}

// Função para formatar o mês de expiração do cartão para 2 dígitos
const formatMonth = (value: string) => {
  return value.replace(/\D/g, '').slice(0, 2)
}

// Função para formatar o ano de expiração do cartão para 4 dígitos
const formatYear = (value: string) => {
  return value.replace(/\D/g, '').slice(0, 4)
}

// Função para formatar o CEP no formato "99999-999"
const formatZipCode = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d{3})/, '$1-$2')
    .slice(0, 9)
}

// Componente principal do processo de Checkout
const Checkout: React.FC = () => {
  const dispatch = useDispatch()
  const [purchase, { data, isLoading }] = usePurchaseMutation()
  const { deliveryIsOpen, paymentIsOpen, confirmationIsOpen } = useSelector(
    (state: RootReducer) => state.checkout
  )
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [error, setError] = useState<string | null>(null)

  // Configuração do formulário usando Formik e Yup para validação
  const form = useFormik({
    initialValues: {
      receiver: '',
      adress: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      nameOnCard: '',
      cardNumber: '',
      cardSecurityCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: yupObject({
      receiver: yupString()
        .min(3, 'O nome do receptor precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      adress: yupString()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: yupString()
        .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      zipCode: yupString()
        .min(9, 'O CEP precisa ter 8 caracteres')
        .max(9, 'O CEP precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      number: yupString()
        .min(1, 'O número precisa ter pelo menos um caractere')
        .required('O campo é obrigatório'),
      nameOnCard: yupString()
        .min(5, 'O nome no cartão deve ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: yupString()
        .min(19, 'O número do cartão deve ter 16 dígitos')
        .max(19, 'O número do cartão deve ter 16 dígitos')
        .required('O campo é obrigatório'),
      cardSecurityCode: yupString()
        .min(3, 'O código de segurança deve ter 3 dígitos')
        .max(3, 'O código de segurança deve ter 3 dígitos')
        .required('O campo é obrigatório'),
      expiresMonth: yupString()
        .min(2, 'O mês de vencimento deve ter 2 dígitos')
        .max(2, 'O mês de vencimento deve ter 2 dígitos')
        .required('O campo é obrigatório'),
      expiresYear: yupString()
        .min(4, 'O ano de vencimento deve ter 4 dígitos')
        .max(4, 'O ano de vencimento deve ter 4 dígitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await purchase({
          products: items.map((item) => ({
            id: item.id,
            price: item.preco
          })),
          delivery: {
            receiver: values.receiver,
            address: {
              description: values.adress,
              city: values.city,
              zipCode: values.zipCode,
              number: Number(values.number),
              complement: values.complement
            }
          },
          payment: {
            card: {
              name: values.nameOnCard,
              number: values.cardNumber,
              code: Number(values.cardSecurityCode),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear)
              }
            }
          }
        }).unwrap()
        dispatch(closePayment())
        dispatch(openConfirmation())
        resetForm()
      } catch {
        setError('Erro ao processar a compra. Tente novamente.')
      }
    }
  })

  // Função para verificar se os campos obrigatórios estão preenchidos
  const verifyFields = (fields: Array<keyof typeof form.values>) => {
    for (const field of fields) {
      if (!form.values[field]) {
        return false
      }
    }
    return true
  }

  // Função para mostrar a seção de pagamento
  const showInfosPayment = () => {
    if (verifyFields(['receiver', 'adress', 'city', 'zipCode', 'number'])) {
      dispatch(closeDelivery())
      dispatch(openPayment())
    } else {
      setError('Por favor, preencha todos os campos obrigatórios.')
    }
  }

  // Função para mostrar a seção de entrega
  const showInfosDelivery = () => {
    dispatch(closePayment()) // Fecha a seção de pagamento
    dispatch(openDelivery()) // Reabre a seção de entrega
  }

  // Função para mostrar a seção de confirmação
  const showInfosConfirmation = () => {
    form.handleSubmit() // Submete o formulário corretamente
    if (form.isValid) {
      dispatch(closePayment())
      dispatch(openConfirmation())
    } else {
      setError('Por favor, preencha todos os campos obrigatórios.')
    }
  }

  // Função para abrir o carrinho
  const openCart = () => {
    dispatch(closeDelivery())
    dispatch(open())
  }

  // Função para fechar o checkout e limpar o carrinho
  const closeCheckout = () => {
    dispatch(cleanCart())
    dispatch(closeConfirmation())
  }

  return (
    // skipcq: JS-0415
    <>
      <form onSubmit={form.handleSubmit}>
        {/* Seção de entrega */}
        <Container className={deliveryIsOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCheckout} />
          <S.AsideCheckout>
            <S.Title>Entrega</S.Title>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                className={form.errors.receiver ? 'error' : ''}
                type="text"
                id="receiver"
                name="receiver"
                value={form.values.receiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="adress">Endereço</label>
              <input
                className={form.errors.adress ? 'error' : ''}
                type="text"
                id="adress"
                name="adress"
                value={form.values.adress}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                className={form.errors.city ? 'error' : ''}
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <input
                  className={form.errors.zipCode ? 'error' : ''}
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={(e) => {
                    form.handleChange(e)
                    form.setFieldValue('zipCode', formatZipCode(e.target.value))
                  }}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  className={form.errors.number ? 'error' : ''}
                  type="text"
                  id="number"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </S.InputGroup>
            </S.Row>
            <S.InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                className={form.errors.complement ? 'error' : ''}
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.ButtonCheckout
              title="Clique aqui para continuar com o pagamento"
              type="button"
              onClick={showInfosPayment}
              $marginTop="24px"
            >
              Continuar com o pagamento
            </S.ButtonCheckout>
            <S.ButtonCheckout
              title="Clique aqui para retornar ao carrinho"
              type="button"
              onClick={openCart}
            >
              Voltar para o carrinho
            </S.ButtonCheckout>
          </S.AsideCheckout>
        </Container>

        {/* Seção de pagamento */}
        <Container className={paymentIsOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCheckout} />
          <S.AsideCheckout>
            <S.Title>
              Pagamento - Valor a pagar {priceFormat(getTotalPrice(items))}
            </S.Title>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.InputGroup>
              <label htmlFor="nameOnCard">Nome no cartão</label>
              <input
                className={form.errors.nameOnCard ? 'error' : ''}
                type="text"
                id="nameOnCard"
                name="nameOnCard"
                value={form.values.nameOnCard}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.Row $columnGap="30px">
              <S.InputGroup $maxWidth="228px">
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  className={form.errors.cardNumber ? 'error' : ''}
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={(e) => {
                    form.handleChange(e)
                    form.setFieldValue(
                      'cardNumber',
                      formatCardNumber(e.target.value)
                    )
                  }}
                  onBlur={form.handleBlur}
                  onKeyDown={(e) => {
                    if (
                      !/[0-9]/.test(e.key) &&
                      !['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(
                        e.key
                      )
                    ) {
                      e.preventDefault()
                    }
                  }}
                  maxLength={19}
                />
              </S.InputGroup>
              <S.InputGroup $maxWidth="87px">
                <label htmlFor="cardSecurityCode">CVV</label>
                <input
                  className={form.errors.cardSecurityCode ? 'error' : ''}
                  type="text"
                  id="cardSecurityCode"
                  name="cardSecurityCode"
                  value={form.values.cardSecurityCode}
                  onChange={(e) => {
                    form.handleChange(e)
                    form.setFieldValue(
                      'cardSecurityCode',
                      formatSecurityCode(e.target.value)
                    )
                  }}
                  onBlur={form.handleBlur}
                  maxLength={3}
                />
              </S.InputGroup>
            </S.Row>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  className={form.errors.expiresMonth ? 'error' : ''}
                  type="text"
                  id="expiresMonth"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={(e) => {
                    form.handleChange(e)
                    form.setFieldValue(
                      'expiresMonth',
                      formatMonth(e.target.value)
                    )
                  }}
                  onBlur={form.handleBlur}
                  maxLength={2}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  className={form.errors.expiresYear ? 'error' : ''}
                  type="text"
                  id="expiresYear"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={(e) => {
                    form.handleChange(e)
                    form.setFieldValue(
                      'expiresYear',
                      formatYear(e.target.value)
                    )
                  }}
                  onBlur={form.handleBlur}
                  maxLength={4}
                />
              </S.InputGroup>
            </S.Row>
            <S.ButtonCheckout
              title="Clique aqui para finalizar o pagamento"
              type="submit"
              onClick={showInfosConfirmation}
              disabled={isLoading}
              $marginTop="24px"
            >
              {isLoading ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
            </S.ButtonCheckout>
            <S.ButtonCheckout
              title="Clique aqui para retornar para a edição de endereço"
              type="button"
              onClick={showInfosDelivery} // Chama a função correta para retornar à edição de endereço
            >
              Voltar para a edição de endereço
            </S.ButtonCheckout>
          </S.AsideCheckout>
        </Container>
      </form>

      {/* Seção de confirmação */}
      <Container className={confirmationIsOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCheckout} />
        <S.AsideCheckout>
          <S.ContainerOrder>
            {data ? (
              <>
                <S.Title>Pedido realizado - {data.orderId}</S.Title>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </p>
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </p>
                <p>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <Button
                  title="Clique aqui para sair da aba de checkout"
                  type="button"
                  onClick={closeCheckout}
                  aria-label="Concluir checkout"
                >
                  Concluir
                </Button>
              </>
            ) : (
              <Loader />
            )}
          </S.ContainerOrder>
        </S.AsideCheckout>
      </Container>
    </>
  )
}

export default Checkout
