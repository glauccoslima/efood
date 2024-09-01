import styled from 'styled-components'
import { StandardButton } from '../Button/styles'
import { breakpoints, colors } from '../../styles'

// Estilo para o container do modal
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

// Estilo para o conteúdo do modal
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkPink};
  z-index: 1;

  header {
    display: flex;
    justify-content: end;

    button {
      background-color: ${colors.lightGray}; // Cor de fundo do botão
      border: none; // Remove a borda padrão do botão
      padding: 8px; // Espaçamento interno do botão
      cursor: pointer; // Define o cursor como pointer ao passar sobre o botão

      &:hover {
        background-color: ${colors.pink}; // Cor de fundo ao passar o mouse
      }

      &:active {
        background-color: ${colors.darkPink}; // Cor de fundo ao clicar
      }

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`

// Estilo para o conteúdo principal do modal
export const Content = styled.div`
  display: flex;
  margin: 0 32px 32px 32px;

  img {
    margin-right: 24px;
    width: 280px;
    height: 280px;
  }

  h4 {
    color: ${colors.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  p {
    color: ${colors.white};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin: 16px 0;
  }

  ${StandardButton} {
    padding: 4px 8px;
    width: auto;
    text-align: justify;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin: 0;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: justify;

      h4 {
        margin-top: 16px;
      }

      ${StandardButton} {
        margin-top: 8px;
      }
    }
  }
`
