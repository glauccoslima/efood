import styled from 'styled-components' // Importa a biblioteca styled-components para criar componentes estilizados

import { StandardButton } from '../Button/styles' // Importa o componente estilizado StandardButton
import { breakpoints, colors } from '../../styles' // Importa os breakpoints e as cores definidas no arquivo de estilos

// Estilo para o container do modal
export const Modal = styled.div`
  position: fixed; // Fixa o modal na tela
  top: 0; // Posiciona o modal no topo
  left: 0; // Posiciona o modal à esquerda
  width: 100%; // Largura total da tela
  height: 100%; // Altura total da tela
  display: none; // Inicialmente, o modal não é exibido
  align-items: center; // Alinha os itens ao centro verticalmente
  justify-content: center; // Alinha os itens ao centro horizontalmente

  &.visible {
    display: flex; // Exibe o modal quando a classe 'visible' é adicionada
  }

  .overlay {
    position: fixed; // Fixa o overlay na tela
    top: 0; // Posiciona o overlay no topo
    left: 0; // Posiciona o overlay à esquerda
    width: 100%; // Largura total da tela
    height: 100%; // Altura total da tela
    background-color: rgba(
      0,
      0,
      0,
      0.8
    ); // Cor de fundo semitransparente para o overlay
  }
`

// Estilo para o conteúdo do modal
export const ModalContent = styled.div`
  display: flex; // Exibe os itens em flexbox
  flex-direction: column; // Direção da flexbox em coluna
  background-color: ${colors.darkPink}; // Cor de fundo do conteúdo do modal
  z-index: 1; // Define a ordem de empilhamento

  header {
    display: flex; // Exibe os itens em flexbox
    justify-content: end; // Alinha os itens ao final

    img {
      width: 16px; // Largura da imagem
      height: 16px; // Altura da imagem
      margin: 8px; // Espaçamento ao redor da imagem
    }
  }
`

// Estilo para o conteúdo principal do modal
export const Content = styled.div`
  display: flex; // Exibe os itens em flexbox
  margin: 0 32px 32px 32px; // Margem ao redor do conteúdo

  img {
    margin-right: 24px; // Margem à direita da imagem
    width: 280px; // Largura da imagem
    height: 280px; // Altura da imagem
  }

  h4 {
    color: ${colors.white}; // Cor do texto
    font-size: 18px; // Tamanho da fonte
    font-style: normal; // Estilo da fonte
    font-weight: 900; // Peso da fonte
    line-height: normal; // Altura da linha
  }

  p {
    color: ${colors.white}; // Cor do texto
    font-size: 14px; // Tamanho da fonte
    font-style: normal; // Estilo da fonte
    font-weight: 400; // Peso da fonte
    line-height: 22px; // Altura da linha
    margin: 16px 0; // Margem vertical
  }

  ${StandardButton} {
    padding: 4px 8px; // Espaçamento interno do botão
    width: auto; // Largura automática
    text-align: justify; // Alinhamento do texto justificado
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex; // Exibe os itens em flexbox
    flex-direction: column; // Direção da flexbox em coluna
    align-items: center; // Alinha os itens ao centro

    img {
      margin: 0; // Remove a margem da imagem
    }

    div {
      display: flex; // Exibe os itens em flexbox
      flex-direction: column; // Direção da flexbox em coluna
      align-items: center; // Alinha os itens ao centro
      text-align: justify; // Alinhamento do texto justificado

      h4 {
        margin-top: 16px; // Margem superior do título
      }

      ${StandardButton} {
        margin-top: 8px; // Margem superior do botão
      }
    }
  }
`
