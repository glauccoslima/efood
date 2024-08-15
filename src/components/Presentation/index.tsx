import { useParams } from 'react-router-dom' // Importa o hook useParams do react-router-dom para acessar os parâmetros da URL

import Loader from '../Loader' // Importa o componente Loader para exibir um indicador de carregamento

import { useGetSelectedRestaurantQuery } from '../../services/api' // Importa o hook para buscar os dados do restaurante selecionado

import { PresentationContainer, Title } from './styles' // Importa os componentes estilizados

// Define a tipagem para os parâmetros da URL
type RestaurantParams = {
  id: string
}

// Componente Presentation que exibe a apresentação do restaurante
const Presentation = () => {
  // Obtém o parâmetro 'id' da URL
  const { id } = useParams() as RestaurantParams
  // Faz a consulta para obter os dados do restaurante selecionado
  const { data: restaurant } = useGetSelectedRestaurantQuery(id)

  // Se os dados do restaurante não estiverem disponíveis, exibe o Loader
  if (!restaurant) {
    return <Loader />
  }

  // Renderiza o conteúdo do restaurante
  return (
    restaurant && (
      // Container principal da apresentação do restaurante
      <PresentationContainer
        style={{ backgroundImage: `url(${restaurant.capa})` }} // Define a imagem de fundo do container
      >
        <div className="background">
          <div className="container">
            {/* Exibe o tipo do restaurante */}
            <span>{restaurant.tipo}</span>
            {/* Exibe o título do restaurante */}
            <Title>{restaurant.titulo}</Title>
          </div>
        </div>
      </PresentationContainer>
    )
  )
}

export default Presentation
