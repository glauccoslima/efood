import styled from 'styled-components'
import { Aside } from '../Cart/styles'
import { StandardButton } from '../Button/styles'
import { colors } from '../../styles'

// Tipagem para as propriedades do botão
type ButtonProps = {
  $marginTop?: string
}

// Tipagem para as propriedades do grupo de input
type InputGroupProps = {
  $maxWidth?: string
}

// Tipagem para as propriedades da linha
type RowProps = {
  $columnGap?: string
}

// Estilo para o título
export const Title = styled.h3`
  color: ${colors.pink}; // Cor do texto
  font-size: 16px; // Tamanho da fonte
  font-style: normal; // Estilo da fonte
  font-weight: 700; // Peso da fonte
  margin-bottom: 16px; // Espaçamento inferior
`

// Estilo para a linha que contém elementos flexíveis
export const Row = styled.div<RowProps>`
  display: flex; // Exibe os elementos em linha
  column-gap: ${(props) =>
    props.$columnGap ? props.$columnGap : '34px'}; // Espaçamento entre colunas
`

// Estilo para o grupo de input
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto; // O grupo de input ocupa o espaço disponível

  max-width: ${(props) =>
    props.$maxWidth
      ? props.$maxWidth
      : 'auto'}; // Largura máxima do grupo de input

  label {
    color: ${colors.pink}; // Cor do texto do label
    font-size: 14px; // Tamanho da fonte do label
    font-style: normal; // Estilo da fonte do label
    font-weight: 700; // Peso da fonte do label
    display: block; // Exibe o label como bloco
  }

  input {
    margin: 8px 0; // Espaçamento vertical
    padding: 0 8px; // Espaçamento interno horizontal
    background-color: ${colors.pink}; // Cor de fundo do input
    height: 32px; // Altura do input
    border: 1px solid ${colors.pink}; // Borda do input
    width: 100%; // Largura total do input

    &.error {
      background-color: #ffe564; // Cor de fundo do input em estado de erro
      border: 1px solid #000; // Borda do input em estado de erro
    }
  }
`

// Estilo para o botão de checkout
export const ButtonCheckout = styled(StandardButton)<ButtonProps>`
  margin-bottom: 8px; // Espaçamento inferior
  margin-top: ${(props) =>
    props.$marginTop || '0'}; // Espaçamento superior condicional
`

// Estilo para o container do pedido
export const ContainerOrder = styled.div`
  p {
    color: ${colors.pink}; // Cor do texto
    font-size: 14px; // Tamanho da fonte
    font-style: normal; // Estilo da fonte
    font-weight: 400; // Peso da fonte
    line-height: 22px; // Altura da linha
    margin-bottom: 24px; // Espaçamento inferior
  }
`

// Estilo para o container lateral do checkout, herdando estilos do Aside
export const AsideCheckout = styled(Aside)`
  overflow-y: auto; // Permite rolagem vertical
`

// Estilo para mensagens de erro
export const ErrorMessage = styled.p`
  color: ${colors.pink};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
`
