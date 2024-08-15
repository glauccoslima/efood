import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

// Estilo para o container das logos das redes sociais
export const Logos = styled.div`
  display: flex; // Exibe as logos em linha
  margin-top: 32px; // Espaçamento superior
  margin-bottom: 80px; // Espaçamento inferior
  cursor: pointer; // Cursor de ponteiro ao passar sobre as logos

  img {
    margin-right: 8px; // Espaçamento à direita de cada logo
  }
`

// Estilo para o container do rodapé
export const FooterContainer = styled.div`
  padding: 40px 0; // Espaçamento interno superior e inferior
  background-color: ${colors.pink}; // Cor de fundo do rodapé

  .container {
    display: flex; // Exibe o conteúdo em flexbox
    flex-direction: column; // Direção da flexbox em coluna
    align-items: center; // Alinha o conteúdo ao centro
  }

  p {
    font-size: 10px; // Tamanho da fonte do texto
    color: ${colors.darkPink}; // Cor do texto
    width: 480px; // Largura fixa do texto
    text-align: center; // Alinhamento centralizado do texto

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%; // Largura total em telas menores
    }
  }
`
