import header from '../../assets/images/header.svg'

import styled from 'styled-components'

import { LinkButton } from '../Button/styles'
import { breakpoints, colors } from '../../styles'

// Estilo para o link de restaurantes no cabeçalho
export const RestaurantLink = styled(LinkButton)`
  padding: 0; // Remove o padding padrão
  font-size: 18px; // Tamanho da fonte
  font-weight: 900; // Peso da fonte
  background-color: transparent; // Fundo transparente
  color: ${colors.darkPink}; // Cor do texto
  width: 256px; // Largura fixa do link
  bottom: 0; // Posicionamento inferior relativo
  left: 0; // Posicionamento à esquerda relativo
  position: relative; // Posição relativa
`

// Estilo para o container do cabeçalho
export const HeaderContainer = styled.div`
  background-image: url(${header}); // Imagem de fundo do cabeçalho
  padding: 64px 0; // Espaçamento interno superior e inferior
  font-size: 18px; // Tamanho da fonte
  height: 186px; // Altura fixa do cabeçalho
  align-items: center; // Alinhamento central dos itens

  .container {
    display: flex; // Exibe os itens em linha
    align-items: center; // Alinha os itens ao centro
    justify-content: space-between; // Espaça os itens igualmente

    button {
      width: 256px; // Largura fixa do botão
      text-align: right; // Alinhamento do texto à direita
      font-size: 18px; // Tamanho da fonte
      font-weight: 900; // Peso da fonte
      color: ${colors.darkPink}; // Cor do texto
      background-color: transparent; // Fundo transparente
      border: none; // Remove a borda padrão
      cursor: pointer; // Cursor de ponteiro ao passar sobre o botão
    }

    h1 {
      line-height: 0; // Altura da linha zero para o título
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 0; // Espaçamento interno superior e inferior reduzido
    text-align: center; // Alinhamento centralizado do texto

    .container {
      display: flex; // Exibe os itens em linha
      flex-direction: column; // Direção da flexbox em coluna
      align-items: center; // Alinha os itens ao centro

      img {
        margin: 16px 0; // Espaçamento vertical para a imagem
      }

      button {
        text-align: center; // Alinhamento centralizado do texto no botão
      }
    }
  }
`
