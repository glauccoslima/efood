import ladolcevita from '../../assets/images/ladolcevita-big.png' // Importa a imagem de fundo padrão

import styled from 'styled-components' // Importa a biblioteca styled-components para criar componentes estilizados

import { colors } from '../../styles' // Importa as cores definidas no arquivo de estilos

// Estilo para o container principal da apresentação
export const PresentationContainer = styled.div`
  background-image: url(${ladolcevita}); // Define a imagem de fundo padrão
  background-repeat: no-repeat; // Define que a imagem de fundo não se repete
  background-size: cover; // Define que a imagem de fundo cobre todo o container
  height: 280px; // Define a altura do container

  .background {
    width: 100%; // Largura total do container interno
    height: 100%; // Altura total do container interno
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); // Cor de fundo semitransparente para o overlay
    padding-top: 24px; // Espaçamento interno superior
    padding-bottom: 32px; // Espaçamento interno inferior
  }

  span {
    font-size: 32px; // Define o tamanho da fonte do texto
    font-weight: 100; // Define o peso da fonte do texto
    color: ${colors.white}; // Define a cor do texto
  }
`

// Estilo para o título da apresentação
export const Title = styled.h2`
  margin-top: 156px; // Define a margem superior do título
  font-size: 32px; // Define o tamanho da fonte do título
  font-weight: bold; // Define o peso da fonte do título
  color: ${colors.white}; // Define a cor do título
`
