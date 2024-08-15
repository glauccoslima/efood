import { useDispatch } from 'react-redux' // Importa o hook useDispatch do React-Redux para despachar ações

import Button from '../Button' // Importa o componente Button

import { open, add } from '../../store/reducers/modal' // Importa as ações open e add do reducer do modal

import * as S from './styles' // Importa os estilos do componente

// Função para obter uma descrição truncada
const getDescription = (description: string) => {
  // Se a descrição for maior que 175 caracteres, trunca e adiciona '...'
  if (description.length > 175) {
    return description.slice(0, 160) + '...'
  }
  return description // Retorna a descrição completa se for menor ou igual a 175 caracteres
}

// Componente Product que exibe as informações de um produto
const Product = ({ foto, preco, id, nome, descricao, porcao }: ProductType) => {
  // Cria um objeto com as informações do produto selecionado
  const selectedProduct = {
    foto,
    preco,
    nome,
    id,
    descricao,
    porcao
  }

  // Hook para despachar ações do Redux
  const dispatch = useDispatch()

  // Função para abrir o modal com os detalhes do produto
  const openModal = () => {
    dispatch(add(selectedProduct)) // Adiciona o produto selecionado ao estado do modal
    dispatch(open()) // Abre o modal
  }

  return (
    <>
      {/* Card do produto */}
      <S.ProductsCard>
        {/* Imagem do produto */}
        <img src={foto} alt={nome} />
        {/* Título do produto */}
        <S.Title>{nome}</S.Title>
        {/* Descrição truncada do produto */}
        <S.Description>{getDescription(descricao)}</S.Description>
        {/* Botão para abrir o modal com mais detalhes */}
        <Button
          title="Clique aqui para saber mais detalhes sobre o produto"
          type="button"
          onClick={openModal}
        >
          Mais detalhes
        </Button>
      </S.ProductsCard>
    </>
  )
}

export default Product
