import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'

import { getTotalPrice, priceFormat } from '../../utils'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { openDelivery } from '../../store/reducers/checkout'

import * as S from './styles'

// Componente principal do carrinho de compras
const Cart = () => {
  // Obtém o estado do carrinho do Redux
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  // Hook para despachar ações do Redux
  const dispatch = useDispatch()

  // Função para fechar o carrinho
  const closeCart = () => {
    dispatch(close())
  }

  // Função para remover um item do carrinho
  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }

  // Função para abrir a seção de entrega
  const open = () => {
    closeCart()
    dispatch(openDelivery())
  }

  // Função para redirecionar para a entrega ou fechar o carrinho se estiver vazio
  const redirect = () => {
    if (items.length === 0) {
      return closeCart()
    }
    return open()
  }

  return (
    // Container principal do carrinho
    <S.Container className={isOpen ? 'is-open' : ''}>
      {/* Overlay para fechar o carrinho ao clicar fora */}
      <S.Overlay onClick={closeCart} />
      <S.Aside>
        {items.length > 0 ? (
          <>
            {/* Lista de itens no carrinho */}
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{priceFormat(item.preco)}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    type="button"
                  />
                </S.CartItem>
              ))}
            </ul>
            {/* Exibição do preço total */}
            <S.PriceContent>
              <p>Valor total</p>
              <span>{priceFormat(getTotalPrice(items))}</span>
            </S.PriceContent>
            {/* Botão para continuar com a entrega */}
            <Button
              title="Clique aqui para continuar com a entrega"
              type="button"
              onClick={() => redirect()}
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <>
            {/* Mensagem quando o carrinho está vazio */}
            <p className="empty-text">
              O carrinho está vazio, adicione um produto para continuar com a
              compra.
            </p>
            {/* Botão para retornar ao menu do restaurante */}
            <Button
              title="Clique aqui para retornar ao menu do restaurante"
              type="button"
              onClick={() => closeCart()}
            >
              Retornar
            </Button>
          </>
        )}
      </S.Aside>
    </S.Container>
  )
}

export default Cart
