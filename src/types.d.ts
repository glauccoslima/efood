// Define o tipo ProductType que representa um produto no cardápio de um restaurante
declare type ProductType = {
  foto: string // URL da foto do produto
  preco: number // Preço do produto
  id: number // ID único do produto
  nome: string // Nome do produto
  descricao: string // Descrição do produto
  porcao: string // Informação sobre a porção do produto
}

// Define o tipo RestaurantType que representa um restaurante
declare type RestaurantType = {
  id: number // ID único do restaurante
  titulo: string // Título ou nome do restaurante
  destacado: boolean // Indica se o restaurante é destacado
  tipo: string // Tipo de cozinha do restaurante
  avaliacao: number // Avaliação do restaurante (por exemplo, estrelas)
  descricao: string // Descrição do restaurante
  capa: string // URL da imagem de capa do restaurante
  cardapio: ProductType[] // Lista de produtos (cardápio) do restaurante
}
