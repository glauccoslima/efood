import hero from '../../assets/images/hero.svg' // Importa a imagem de fundo do Hero

import styled from 'styled-components' // Importa a biblioteca styled-components para criar componentes estilizados

import { colors } from '../../styles' // Importa as cores definidas no arquivo de estilos

// Estilo para o container principal do Hero
export const HeroContainer = styled.div`
  background-image: url(${hero}); // Define a imagem de fundo do Hero
  padding: 40px; // Define o espaçamento interno
  text-align: center; // Centraliza o texto
`

// Estilo para o título principal do Hero
export const Title = styled.h1`
  font-size: 36px; // Define o tamanho da fonte
  font-weight: 900; // Define o peso da fonte
  color: ${colors.darkPink}; // Define a cor do texto
  margin-top: 138px; // Define o espaçamento superior
`
