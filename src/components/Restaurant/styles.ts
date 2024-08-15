import styled from 'styled-components' // Importa a biblioteca styled-components para criar componentes estilizados

import { TagContainer } from '../Tag/styles' // Importa o container de estilos do componente Tag
import { breakpoints, colors } from '../../styles' // Importa os breakpoints e as cores definidas no arquivo de estilos

// Estilo para o card do restaurante
export const RestaurantCard = styled.div``

// Estilo para a imagem do restaurante
export const Image = styled.div`
  width: 100%; // Define a largura da imagem como 100% do container
  height: 217px; // Define a altura da imagem
  justify-content: end; // Alinha o conteúdo ao final horizontalmente
  position: relative; // Define a posição relativa para o container da imagem
  background-size: cover; // Define que a imagem de fundo cobre todo o container

  ${TagContainer} {
    margin-left: 8px; // Define a margem à esquerda para o container da tag
  }
`

// Estilo para o título do restaurante
export const Title = styled.h3`
  font-size: 18px; // Define o tamanho da fonte do título
  font-weight: bold; // Define o peso da fonte do título
  color: ${colors.darkPink}; // Define a cor do título
`

// Estilo para a avaliação do restaurante, reutilizando o estilo do título
export const Grade = styled(Title)`
  margin-right: 8px; // Define a margem à direita para a avaliação
`

// Estilo para as informações do restaurante
export const Infos = styled.div`
  padding: 8px; // Define o espaçamento interno
  background-color: ${colors.white}; // Define a cor de fundo das informações
  border-right: 1px solid ${colors.darkPink}; // Define a borda direita
  border-bottom: 1px solid ${colors.darkPink}; // Define a borda inferior
  border-left: 1px solid ${colors.darkPink}; // Define a borda esquerda
  height: 208px; // Define a altura do container de informações
  position: relative; // Define a posição relativa para o container de informações

  @media (max-width: ${breakpoints.desktop}) {
    height: 248px; // Define a altura do container de informações em telas menores
  }

  div {
    display: flex; // Define o layout como flexbox
    align-items: center; // Alinha os itens ao centro verticalmente
    justify-content: space-between; // Distribui os itens com espaço entre eles

    ${Title} {
      height: 21px; // Define a altura do título dentro do container de informações
    }
  }
`

// Estilo para a descrição do restaurante
export const Description = styled.p`
  margin: 16px 0; // Define a margem superior e inferior
  font-size: 14px; // Define o tamanho da fonte
  line-height: 22px; // Define a altura da linha
  color: ${colors.darkPink}; // Define a cor do texto
  text-align: justify; // Justifica o texto
`

// Estilo para o container das tags de informações
export const InfosTag = styled.div`
  position: absolute; // Define a posição absoluta para o container das tags
  top: 16px; // Define a posição superior
  right: 16px; // Define a posição à direita

  &.message {
    ::first-letter {
      text-transform: uppercase; // Transforma a primeira letra em maiúscula
    }
  }
`
