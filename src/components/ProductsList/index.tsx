import Loader from '../Loader' // Importa o componente Loader para exibir um indicador de carregamento
import Product from '../Product' // Importa o componente Product para exibir os produtos

import { ProductsSection, List } from './styles' // Importa os estilos específicos do componente

// Define a tipagem das propriedades esperadas pelo componente
export type Props = {
  products?: ProductType[] // Lista de produtos, opcional
  isLoading: boolean // Indicador de carregamento
}

// Componente ProductsList que exibe uma lista de produtos
const ProductsList = ({ products, isLoading }: Props) => {
  // Se estiver carregando, exibe o Loader
  if (isLoading) {
    return <Loader />
  }

  // Renderiza a lista de produtos
  return (
    // Seção principal dos produtos
    <ProductsSection>
      <div className="container">
        {/* Lista de produtos */}
        <List>
          {products?.map((product) => (
            // Renderiza o componente Product para cada produto na lista
            <Product
              key={product.id} // Chave única para cada produto
              id={product.id} // ID do produto
              foto={product.foto} // Foto do produto
              nome={product.nome} // Nome do produto
              descricao={product.descricao} // Descrição do produto
              preco={product.preco} // Preço do produto
              porcao={product.porcao} // Porção do produto
            />
          ))}
        </List>
      </div>
    </ProductsSection>
  )
}

export default ProductsList
