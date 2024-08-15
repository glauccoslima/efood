import styled from 'styled-components' // Importa a biblioteca styled-components para criar componentes estilizados

import { breakpoints, colors } from '../../styles' // Importa os breakpoints e as cores definidas no arquivo de estilos

// Estilo para a lista de produtos
export const List = styled.ul`
  padding: 56px 0 120px; // Define o espaçamento interno superior e inferior
  display: grid; // Define o layout da lista como grid
  grid-template-columns: 1fr 1fr 1fr; // Define três colunas de largura igual
  column-gap: 32px; // Define o espaçamento entre as colunas
  row-gap: 40px; // Define o espaçamento entre as linhas
  background-color: ${colors.lightPink}; // Define a cor de fundo da lista

  // Estilos para telas menores que o breakpoint desktop
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr; // Define duas colunas de largura igual
  }

  // Estilos para telas menores que o breakpoint tablet
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr; // Define uma coluna de largura igual
  }
`

// Estilo para a seção de produtos
export const ProductsSection = styled.div`
  background-color: ${colors.lightPink}; // Define a cor de fundo da seção de produtos
`
