// Importa o componente Link do react-router-dom para navegação
import { Link } from 'react-router-dom'

// Importa a biblioteca styled-components para criar componentes estilizados
import styled from 'styled-components'

// Importa o objeto colors que contém as cores utilizadas no projeto
import { colors } from '../../styles'

// Define um botão padrão estilizado usando styled-components
export const StandardButton = styled.button`
  padding: 4px 0; // Define o espaçamento interno superior e inferior
  height: 24px; // Define a altura do botão
  background-color: ${colors.pink}; // Define a cor de fundo do botão
  color: ${colors.darkPink}; // Define a cor do texto do botão
  width: 100%; // Define a largura do botão para ocupar 100% do espaço disponível
  font-size: 14px; // Define o tamanho da fonte do texto do botão
  font-style: normal; // Define o estilo da fonte como normal
  font-weight: 700; // Define o peso da fonte como negrito
  text-align: center; // Alinha o texto ao centro
  border: none; // Remove qualquer borda do botão
  cursor: pointer; // Define o cursor como pointer ao passar o mouse sobre o botão

  &:disabled {
    background-color: ${colors.lightGray};
    cursor: not-allowed;
  }
`

// Define um botão estilizado que utiliza o componente Link para navegação
export const LinkButton = styled(Link)`
  padding: 4px 6px; // Define o espaçamento interno superior/inferior e lateral
  text-decoration: none; // Remove a decoração do texto (sublinhado)
  font-size: 14px; // Define o tamanho da fonte do texto do botão
  font-weight: bold; // Define o peso da fonte como negrito
  background-color: ${colors.darkPink}; // Define a cor de fundo do botão
  color: ${colors.pink}; // Define a cor do texto do botão
  position: absolute; // Define a posição do botão como absoluta
  bottom: 8px; // Define a distância do botão em relação à parte inferior do elemento pai
  left: 8px; // Define a distância do botão em relação à parte esquerda do elemento pai

  &:hover {
    background-color: ${colors.lightGray}; // Altera a cor de fundo ao passar o mouse sobre o botão
  }
`
