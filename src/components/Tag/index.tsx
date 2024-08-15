import { TagContainer } from './styles' // Importa o container de estilos do componente Tag

// Define a tipagem das propriedades esperadas pelo componente Tag
export type TagProps = {
  children: string | boolean // Conteúdo da tag, pode ser uma string ou um booleano
  size: 'small' | 'big' // Tamanho da tag, pode ser 'small' ou 'big'
}

// Componente Tag que exibe uma tag estilizada
const Tag = ({ children, size }: TagProps) => (
  // Renderiza o container da tag com o tamanho especificado e o conteúdo
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
