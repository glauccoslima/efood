import Button from '../Button' // Importa o componente Button
import Tag from '../Tag' // Importa o componente Tag

import star from '../../assets/images/star.svg' // Importa a imagem da estrela

import {
  RestaurantCard,
  Image,
  InfosTag,
  Infos,
  Title,
  Grade,
  Description
} from './styles' // Importa os estilos específicos do componente

// Componente Restaurant que exibe as informações de um restaurante
const Restaurant = ({
  id, // ID do restaurante
  titulo, // Título do restaurante
  destacado, // Indica se o restaurante é destaque
  tipo, // Tipo de cozinha do restaurante
  avaliacao, // Avaliação do restaurante
  descricao, // Descrição do restaurante
  capa // Imagem de capa do restaurante
}: RestaurantType) => (
  // Card do restaurante
  // skipcq: JS-0415
  <RestaurantCard>
    {/* Imagem de capa do restaurante */}
    <Image style={{ backgroundImage: `url(${capa})` }}>
      {/* Tag de informações */}
      <InfosTag className={'message'}>
        {destacado ? (
          <>
            <Tag size="small">Destaque da semana</Tag>
            <Tag size="small">{tipo}</Tag>
          </>
        ) : (
          <Tag size="big">{tipo}</Tag>
        )}
      </InfosTag>
    </Image>
    {/* Informações do restaurante */}
    <Infos>
      <div>
        {/* Título do restaurante */}
        <Title>{titulo}</Title>
        <div>
          {/* Avaliação do restaurante */}
          <Grade>{avaliacao}</Grade>
          {/* Ícone de estrela */}
          <img src={star} alt="Estrela" />
        </div>
      </div>
      {/* Descrição do restaurante */}
      <Description>{descricao}</Description>
      <div>
        {/* Botão para ver mais detalhes sobre o restaurante */}
        <Button
          title="Clique aqui para ver os pratos servidos pelo restaurante"
          type="link"
          to={`restaurant/${id}`}
        >
          Saiba mais
        </Button>
      </div>
    </Infos>
  </RestaurantCard>
)

export default Restaurant
