import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'

// Importando as funções específicas
import { getTotalPrice, priceFormat } from '../../utils' // Importando do arquivo utils/index.ts
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { openDelivery } from '../../store/reducers/checkout'

// Importações explícitas dos componentes de estilo
import { Container, Overlay, Aside, CartItem, PriceContent } from './styles'

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
    <Container className={isOpen ? 'is-open' : ''}>
      {/* Overlay para fechar o carrinho ao clicar fora */}
      <Overlay onClick={closeCart} />
      <Aside>
        {items.length > 0 ? (
          <>
            {/* Lista de itens no carrinho */}
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{priceFormat(item.preco)}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    type="button"
                  />
                </CartItem>
              ))}
            </ul>
            {/* Exibição do preço total */}
            <PriceContent>
              <p>Valor total</p>
              <span>{priceFormat(getTotalPrice(items))}</span>
            </PriceContent>
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
      </Aside>
    </Container>
  )
}

export default Cart
