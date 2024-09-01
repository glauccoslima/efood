import { useDispatch, useSelector } from 'react-redux' // Importa hooks do React-Redux

import Button from '../Button' // Importa o componente Button

import { add, open } from '../../store/reducers/cart' // Importa as ações add e open do reducer do carrinho
import { close } from '../../store/reducers/modal' // Importa a ação close do reducer do modal
import { RootReducer } from '../../store' // Importa a tipagem do estado raiz do Redux
import { priceFormat } from '../../utils' // Importa a função de formatação de preço

import closeImg from '../../assets/images/close.png' // Importa a imagem de fechar

import { Modal as StyledModal, ModalContent, Content } from './styles' // Importa os estilos do componente

// Define a interface para o item
interface Item {
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

// Define a interface para as props do ModalContentComponent
interface ModalContentProps {
  item: Item
  addToCart: () => void
  closeModal: () => void
}

// Componente para o conteúdo do modal
const ModalContentComponent: React.FC<ModalContentProps> = ({
  item,
  addToCart,
  closeModal
}) => (
  <>
    <header>
      {/* Ícone de fechar o modal */}
      <button type="button" onClick={closeModal} aria-label="Fechar modal">
        <img src={closeImg} alt="Ícone de fechar" />
      </button>
    </header>
    <Content>
      {/* Imagem do item */}
      <img src={item.foto} alt={item.nome} />
      <div>
        {/* Nome do item */}
        <h4>{item.nome}</h4>
        {/* Descrição do item */}
        <p>{item.descricao}</p>
        {/* Porção do item */}
        <p>{`Serve: ${item.porcao}`} </p>
        {/* Botão para adicionar o item ao carrinho */}
        <Button
          title="Clique aqui para adicionar este produto ao carrinho"
          type="button"
          onClick={addToCart}
        >{`Adicionar ao carrinho - ${priceFormat(item.preco)}`}</Button>
      </div>
    </Content>
  </>
)

// Componente Modal
const Modal: React.FC = () => {
  // Obtém o estado do modal do Redux
  const { isOpen, item } = useSelector((state: RootReducer) => state.modal)

  // Hook para despachar ações do Redux
  const dispatch = useDispatch()

  // Função para fechar o modal
  const closeModal = () => {
    dispatch(close())
  }

  // Função para adicionar o item ao carrinho
  const addToCart = () => {
    closeModal() // Fecha o modal
    dispatch(add(item)) // Adiciona o item ao carrinho
    dispatch(open()) // Abre o carrinho
  }

  return (
    // Container principal do modal
    <StyledModal className={isOpen ? 'visible' : ''}>
      {/* Conteúdo do modal */}
      <ModalContent className="container">
        <ModalContentComponent
          item={item}
          addToCart={addToCart}
          closeModal={closeModal}
        />
      </ModalContent>
      {/* Overlay para fechar o modal ao clicar fora */}
      <button
        className="overlay"
        onClick={closeModal}
        aria-label="Fechar modal"
      ></button>
    </StyledModal>
  )
}

export default Modal
