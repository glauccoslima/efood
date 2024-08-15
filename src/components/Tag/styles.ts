import styled from 'styled-components' // Importa a biblioteca styled-components para criar componentes estilizados

import { TagProps } from '.' // Importa a tipagem das propriedades do componente Tag
import { colors } from '../../styles' // Importa as cores definidas no arquivo de estilos

// Estilo para o container da tag
export const TagContainer = styled.div<TagProps>`
  // Define o padding com base no tamanho da tag
  padding: ${(props) => (props.size === 'big' ? '6px 10px' : '6px 4px')};
  margin-left: 8px; // Define a margem à esquerda
  background-color: ${colors.darkPink}; // Define a cor de fundo da tag
  color: ${colors.pink}; // Define a cor do texto da tag
  display: inline-block; // Define o display como inline-block
  font-size: 12px; // Define o tamanho da fonte
  font-weight: bold; // Define o peso da fonte
`
