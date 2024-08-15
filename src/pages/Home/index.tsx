import Footer from '../../components/Footer' // Importa o componente Footer para exibir o rodapé da página
import Hero from '../../components/Hero' // Importa o componente Hero para exibir o banner principal da página
import RestaurantsList from '../../components/RestaurantsList' // Importa o componente RestaurantsList para exibir a lista de restaurantes

import { useGetRestaurantsQuery } from '../../services/api' // Importa o hook para buscar os dados dos restaurantes

// Componente Home que representa a página inicial
const Home = () => {
  // Faz a consulta para obter os dados dos restaurantes e o estado de carregamento
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      {/* Componente Hero para exibir o banner principal */}
      <Hero />
      {/* Componente RestaurantsList para exibir a lista de restaurantes */}
      <RestaurantsList restaurants={restaurants} isLoading={isLoading} />
      {/* Componente Footer para exibir o rodapé da página */}
      <Footer />
    </>
  )
}

export default Home
