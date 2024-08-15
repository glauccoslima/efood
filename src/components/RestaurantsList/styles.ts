import styled from 'styled-components' // Importa a biblioteca styled-components para criar componentes estilizados

import { breakpoints, colors } from '../../styles' // Importa os breakpoints e as cores definidas no arquivo de estilos

// Estilo para a lista de restaurantes
export const List = styled.ul`
  padding: 80px 0 120px; // Define o espaçamento interno superior e inferior
  display: grid; // Define o layout da lista como grid
  grid-template-columns: 1fr 1fr; // Define duas colunas de largura igual
  column-gap: 80px; // Define o espaçamento entre as colunas
  row-gap: 48px; // Define o espaçamento entre as linhas
  background-color: ${colors.lightPink}; // Define a cor de fundo da lista

  // Estilos para telas menores que o breakpoint desktop
  @media (max-width: ${breakpoints.desktop}) {
    column-gap: 24px; // Reduz o espaçamento entre as colunas
  }

  // Estilos para telas menores que o breakpoint tablet
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr; // Define uma coluna de largura igual
    column-gap: 24px; // Mantém o espaçamento entre as colunas
  }
`

// Estilo para a seção de restaurantes
export const RestaurantsSection = styled.div`
  background-color: ${colors.lightPink}; // Define a cor de fundo da seção de restaurantes
`
