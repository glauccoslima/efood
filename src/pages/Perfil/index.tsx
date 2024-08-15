import { useParams } from 'react-router-dom' // Importa o hook useParams do react-router-dom para acessar os parâmetros da URL

import Footer from '../../components/Footer' // Importa o componente Footer para exibir o rodapé da página
import Header from '../../components/Header' // Importa o componente Header para exibir o cabeçalho da página
import Presentation from '../../components/Presentation' // Importa o componente Presentation para exibir a apresentação do restaurante
import ProductsList from '../../components/ProductsList' // Importa o componente ProductsList para exibir a lista de produtos

import { useGetSelectedRestaurantQuery } from '../../services/api' // Importa o hook para buscar os dados do restaurante selecionado

// Define a tipagem dos parâmetros esperados na URL
type RestaurantParams = {
  id: string // ID do restaurante
}

// Componente Perfil que representa a página de perfil do restaurante
const Perfil = () => {
  // Obtém o ID do restaurante a partir dos parâmetros da URL
  const { id } = useParams() as RestaurantParams

  // Faz a consulta para obter os dados do restaurante selecionado e o estado de carregamento
  const { data: restaurant, isLoading } = useGetSelectedRestaurantQuery(id)

  return (
    <>
      {/* Componente Header para exibir o cabeçalho */}
      <Header />
      {/* Componente Presentation para exibir a apresentação do restaurante */}
      <Presentation />
      {/* Componente ProductsList para exibir a lista de produtos do restaurante */}
      <ProductsList products={restaurant?.cardapio} isLoading={isLoading} />
      {/* Componente Footer para exibir o rodapé */}
      <Footer />
    </>
  )
}

export default Perfil
