import Button from '../Button' // Importa o componente Button
import Tag from '../Tag' // Importa o componente Tag

import star from '../../assets/images/star.svg' // Importa a imagem da estrela

import * as S from './styles' // Importa os estilos do componente

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
  <S.RestaurantCard>
    {/* Imagem de capa do restaurante */}
    <S.Image style={{ backgroundImage: `url(${capa})` }}>
      {/* Tag de informações */}
      <S.InfosTag className={'message'}>
        <>
          {/* Se o restaurante for destaque, exibe duas tags pequenas */}
          {destacado ? (
            <>
              <Tag size="small">Destaque da semana</Tag>
              <Tag size="small">{tipo}</Tag>
            </>
          ) : (
            // Caso contrário, exibe uma tag grande
            <Tag size="big">{tipo}</Tag>
          )}
        </>
      </S.InfosTag>
    </S.Image>
    {/* Informações do restaurante */}
    <S.Infos>
      <div>
        {/* Título do restaurante */}
        <S.Title>{titulo}</S.Title>
        <div>
          {/* Avaliação do restaurante */}
          <S.Grade>{avaliacao}</S.Grade>
          {/* Ícone de estrela */}
          <img src={star} alt="Estrela" />
        </div>
      </div>
      {/* Descrição do restaurante */}
      <S.Description>{descricao}</S.Description>
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
    </S.Infos>
  </S.RestaurantCard>
)

export default Restaurant
