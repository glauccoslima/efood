import garbage from '../../assets/images/garbage-icon.png'
import styled from 'styled-components'
import { colors } from '../../styles'

// Container principal que cobre toda a tela e contém o carrinho
export const Container = styled.div`
  position: fixed; // Fixa o container na tela
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none; // Inicialmente escondido
  justify-content: flex-end; // Alinha o conteúdo à direita
  z-index: 1; // Garante que o container fique acima de outros elementos

  // Classe que torna o container visível quando o carrinho está aberto
  &.is-open {
    display: flex;
  }
`

// Overlay que cobre a tela quando o carrinho está aberto
export const Overlay = styled.div`
  position: absolute; // Posiciona o overlay sobre toda a tela
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000; // Cor de fundo preta
  opacity: 0.8; // Transparência do overlay
`

// Container lateral que contém os itens do carrinho
export const Aside = styled.aside`
  width: 360px; // Largura fixa do carrinho
  height: 100%; // Altura total da tela
  background-color: ${colors.darkPink}; // Cor de fundo do carrinho
  z-index: 1; // Garante que o carrinho fique acima do overlay
  padding: 32px 8px 64px 8px; // Espaçamento interno
  overflow-y: auto; // Permite rolagem vertical

  // Estilo para o texto exibido quando o carrinho está vazio
  .empty-text {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    color: ${colors.pink};
    margin-bottom: 16px;
  }
`

// Estilo para cada item do carrinho
export const CartItem = styled.li`
  background-color: ${colors.pink}; // Cor de fundo do item
  padding: 8px 8px 12px 8px; // Espaçamento interno
  margin-bottom: 16px; // Espaçamento inferior entre os itens
  display: flex; // Exibe o conteúdo em linha
  position: relative; // Permite posicionamento absoluto do botão de remoção

  // Estilo para a imagem do item
  img {
    height: 80px;
    width: 80px;
    object-fit: cover; // Ajusta a imagem para cobrir o espaço
    margin-right: 8px; // Espaçamento à direita da imagem
  }

  // Estilo para o título do item
  h3 {
    color: ${colors.darkPink};
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    margin-bottom: 16px;
  }

  // Estilo para o preço do item
  span {
    color: ${colors.darkPink};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }

  // Estilo para o botão de remoção do item
  button {
    background-image: url(${garbage}); // Ícone de remoção
    position: absolute; // Posiciona o botão no canto inferior direito
    width: 16px;
    height: 16px;
    background-color: transparent; // Fundo transparente
    bottom: 8px;
    right: 8px;
    border: none; // Remove a borda padrão
    cursor: pointer; // Cursor de ponteiro ao passar sobre o botão
  }
`

// Estilo para o conteúdo que exibe o preço total
export const PriceContent = styled.div`
  display: flex; // Exibe o conteúdo em linha
  justify-content: space-between; // Espaça os elementos igualmente
  margin-bottom: 16px; // Espaçamento inferior
  margin-top: 40px; // Espaçamento superior
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${colors.pink}; // Cor do texto
`
