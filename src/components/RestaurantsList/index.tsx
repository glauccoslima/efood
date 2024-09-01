import Restaurant from '../Restaurant' // Importa o componente Restaurant para exibir os restaurantes
import { List, RestaurantsSection } from './styles' // Importa os estilos do componente
import Loader from '../Loader' // Importa o componente Loader para exibir um indicador de carregamento

// Define a tipagem das propriedades esperadas pelo componente
export type Props = {
  restaurants?: RestaurantType[] // Lista de restaurantes, opcional
  isLoading: boolean // Indicador de carregamento
}

// Componente RestaurantsList que exibe uma lista de restaurantes
const RestaurantsList = ({ restaurants, isLoading }: Props) => {
  // Se estiver carregando, exibe o Loader
  if (isLoading) {
    return <Loader />
  }

  // Renderiza a lista de restaurantes
  return (
    // Seção principal dos restaurantes
    <RestaurantsSection>
      <div className="container">
        {/* Lista de restaurantes */}
        <List>
          {restaurants?.map((restaurant) => (
            // Renderiza o componente Restaurant para cada restaurante na lista
            <Restaurant
              key={restaurant.id} // Chave única para cada restaurante
              id={restaurant.id} // ID do restaurante
              capa={restaurant.capa} // Imagem de capa do restaurante
              titulo={restaurant.titulo} // Título do restaurante
              avaliacao={restaurant.avaliacao} // Avaliação do restaurante
              destacado={restaurant.destacado} // Indica se o restaurante é destaque
              tipo={restaurant.tipo} // Tipo de cozinha do restaurante
              descricao={restaurant.descricao} // Descrição do restaurante
              cardapio={restaurant.cardapio} // Cardápio do restaurante
            />
          ))}
        </List>
      </div>
    </RestaurantsSection>
  )
}

export default RestaurantsList
