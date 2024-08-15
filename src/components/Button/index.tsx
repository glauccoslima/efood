// Importa todos os componentes estilizados do arquivo styles
import * as S from './styles'

// Define o tipo das propriedades esperadas pelo componente Button
type Props = {
  title: string // Título do botão, utilizado para acessibilidade
  type: 'button' | 'link' | 'submit' // Tipo do botão, pode ser 'button', 'link' ou 'submit'
  children: React.ReactNode // Conteúdo filho do botão, pode ser texto, ícones ou outros elementos React
  to?: string // URL de destino, utilizado apenas se o tipo for 'link'
  disabled?: boolean // Indica se o botão está desabilitado
  onClick?: () => void // Função a ser chamada quando o botão for clicado
}

// Componente funcional Button que aceita propriedades definidas pelo tipo Props
const Button = ({ title, type, children, to, disabled, onClick }: Props) => {
  // Verifica se o tipo do botão é 'button' ou 'submit'
  if (type === 'button' || type === 'submit') {
    // Retorna um botão padrão estilizado com as propriedades passadas
    return (
      <S.StandardButton title={title} onClick={onClick} disabled={disabled}>
        {children} {/* Renderiza o conteúdo filho dentro do botão */}
      </S.StandardButton>
    )
  }
  // Se o tipo for 'link', retorna um botão estilizado que utiliza o componente Link para navegação
  if (type === 'link' && to) {
    return (
      <S.LinkButton title={title} to={to}>
        {children} {/* Renderiza o conteúdo filho dentro do botão */}
      </S.LinkButton>
    )
  }

  // Caso to não seja fornecido quando type for 'link', pode retornar null ou lançar um erro
  return null
}

// Exporta o componente Button como padrão
export default Button
