import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Loader from '../Loader'
import Button from '../Button'
import { Container, Overlay } from '../Cart/styles'

import { open, cleanCart } from '../../store/reducers/cart'
import {
  openDelivery,
  closeDelivery,
  openPayment,
  closePayment,
  openConfirmation,
  closeConfirmation
} from '../../store/reducers/checkout'

import { RootReducer } from '../../store'

import { getTotalPrice, priceFormat } from '../../utils'

import { usePurchaseMutation } from '../../services/api'

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
const Checkout = () => {
  // Define a mutation de compra com o hook usePurchaseMutation
  const [purchase, { data, isLoading }] = usePurchaseMutation()

  // Obtém o estado do Redux relacionado ao processo de checkout
  const { deliveryIsOpen, paymentIsOpen, confirmationIsOpen } = useSelector(
    (state: RootReducer) => state.checkout
  )

  // Obtém os itens do carrinho de compras do estado do Redux
  const { items } = useSelector((state: RootReducer) => state.cart)

  // Hook para despachar ações para o Redux
  const dispatch = useDispatch()

  // Função para abrir o carrinho e fechar a seção de entrega
  const openCart = () => {
    dispatch(closeDelivery())
    dispatch(open())
  }

  // Função para verificar os campos de entrega e abrir a seção de pagamento
  const showInfosPayment = () => {
    if (verifyFields(deliveryFields)) {
      dispatch(closeDelivery())
      dispatch(openPayment())
    }
  }

  // Função para retornar à seção de entrega a partir da seção de pagamento
  const showInfosDelivery = () => {
    dispatch(closePayment())
    dispatch(openDelivery())
  }

  // Função para submeter o formulário e abrir a seção de confirmação
  const showInfosConfirmation = () => {
    form.handleSubmit()
    dispatch(closePayment())
    dispatch(openConfirmation())
  }

  // Função para limpar os itens do carrinho após a compra
  const removeCartItems = () => {
    dispatch(cleanCart())
  }

  // Função para fechar o checkout e limpar o carrinho
  const closeCheckout = () => {
    removeCartItems()
    dispatch(closeConfirmation())
  }

  // Configuração do formulário com Formik e validação com Yup
  const form = useFormik({
    initialValues: {
      receiver: '', // Nome do receptor da entrega
      adress: '', // Endereço de entrega
      city: '', // Cidade de entrega
      zipCode: '', // CEP de entrega
      number: '', // Número da residência
      complement: '', // Complemento do endereço
      nameOnCard: '', // Nome no cartão de crédito
      cardNumber: '', // Número do cartão de crédito
      cardSecurityCode: '', // Código de segurança do cartão
      expiresMonth: '', // Mês de validade do cartão
      expiresYear: '' // Ano de validade do cartão
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'O nome do receptor precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O cep precisa ter 8 caracteres')
        .max(9, 'O cep precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O número precisa ter pelo menos um caractere')
        .required('O campo é obrigatório'),

      nameOnCard: Yup.string()
        .min(5, 'O nome no cartão deve ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O número do cartão deve ter 16 dígitos')
        .max(19, 'O número do cartão deve ter 16 dígitos')
        .required('O campo é obrigatório'),
      cardSecurityCode: Yup.string()
        .min(3, 'O código de segurança deve ter 3 dígitos')
        .max(3, 'O código de segurança deve ter 3 dígitos')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O mês de vencimento deve ter 2 dígitos')
        .max(2, 'O mês de vencimento deve ter 2 dígitos')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(4, 'O ano de vencimento deve ter 4 dígitos')
        .max(4, 'O ano de vencimento deve ter 4 dígitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values, { resetForm }) => {
      // Envia os dados da compra para a API
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
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
      }).catch((error) => {
        // Tratamento de erro em caso de falha na compra
        console.error('Error during purchase:', error)
      })
      resetForm()
    }
  })

  // Campos obrigatórios para validação antes de prosseguir para o pagamento
  const deliveryFields = ['receiver', 'adress', 'city', 'zipCode', 'number']

  // Função para verificar se todos os campos necessários foram preenchidos corretamente
  const verifyFields = (fields: string[]) => {
    let areFieldsCorrect = true

    if (!form.dirty) {
      return false
    }

    for (let i = 0; i < fields.length; i++) {
      if (checkInputHasError(fields[i])) {
        areFieldsCorrect = false
      }
    }
    return areFieldsCorrect
  }

  // Função que verifica se um campo específico tem erros
  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      {/* Formulário de checkout */}
      <form onSubmit={form.handleSubmit}>
        {/* Seção de entrega do formulário */}
        <Container className={deliveryIsOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCheckout} />
          <S.AsideCheckout>
            <>
              <S.Title>Entrega</S.Title>
              <S.InputGroup>
                <label htmlFor="receiver">Quem irá receber</label>
                <input
                  className={checkInputHasError('receiver') ? 'error' : ''}
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
                  className={checkInputHasError('adress') ? 'error' : ''}
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
                  className={checkInputHasError('city') ? 'error' : ''}
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
                    className={checkInputHasError('zipCode') ? 'error' : ''}
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={form.values.zipCode}
                    onChange={(e) => {
                      form.handleChange(e)
                      form.setFieldValue(
                        'zipCode',
                        formatZipCode(e.target.value)
                      )
                    }}
                    onBlur={form.handleBlur}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="number">Número</label>
                  <input
                    className={checkInputHasError('number') ? 'error' : ''}
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
                  className={checkInputHasError('complement') ? 'error' : ''}
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
                onClick={() => showInfosPayment()}
                $marginTop="24px"
              >
                Continuar com o pagamento
              </S.ButtonCheckout>
              <S.ButtonCheckout
                title="Clique aqui para retornar ao carrinho"
                type="button"
                onClick={() => openCart()}
              >
                Voltar para o carrinho
              </S.ButtonCheckout>
            </>
          </S.AsideCheckout>
        </Container>
        {/* Seção de pagamento do formulário */}
        <Container className={paymentIsOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCheckout} />
          <S.AsideCheckout>
            <S.Title>
              Pagamento - Valor a pagar {priceFormat(getTotalPrice(items))}
            </S.Title>
            <S.InputGroup>
              <label htmlFor="nameOnCard">Nome no cartão</label>
              <input
                className={checkInputHasError('nameOnCard') ? 'error' : ''}
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
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
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
                />
              </S.InputGroup>
              <S.InputGroup $maxWidth="87px">
                <label htmlFor="cardSecurityCode">CVV</label>
                <input
                  className={
                    checkInputHasError('cardSecurityCode') ? 'error' : ''
                  }
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
                />
              </S.InputGroup>
            </S.Row>
            <S.Row>
              <S.InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  className={checkInputHasError('expiresMonth') ? 'error' : ''}
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
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  className={checkInputHasError('expiresYear') ? 'error' : ''}
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
              onClick={showInfosDelivery}
            >
              Voltar para a edição de endereço
            </S.ButtonCheckout>
          </S.AsideCheckout>
        </Container>
      </form>
      {/* Seção de confirmação do pedido */}
      <Container className={confirmationIsOpen ? 'is-open' : ''}>
        <Overlay onClick={() => closeCheckout()} />
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
                  onClick={() => closeCheckout()}
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
