import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' // Importa funções para criar a API e realizar consultas base

// Define o tipo Product com id e price
type Product = {
  id: number // ID do produto
  price: number // Preço do produto
}

// Define o tipo OrderPayload que representa a estrutura do payload de um pedido
type OrderPayload = {
  products: Product[] // Lista de produtos no pedido
  delivery: {
    receiver: string // Nome do destinatário
    address: {
      description: string // Descrição do endereço
      city: string // Cidade
      zipCode: string // Código postal
      number: number // Número do endereço
      complement: string // Complemento do endereço
    }
  }
  payment: {
    card: {
      name: string // Nome no cartão
      number: string // Número do cartão
      code: number // Código de segurança do cartão
      expires: {
        month: number // Mês de expiração do cartão
        year: number // Ano de expiração do cartão
      }
    }
  }
}

// Define o tipo PurchaseResponse que representa a resposta de uma compra
type PurchaseResponse = {
  orderId: string // ID do pedido
}

// Cria a API usando createApi
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes' // URL base para as requisições
  }),
  endpoints: (builder) => ({
    // Define o endpoint para obter a lista de restaurantes
    getRestaurants: builder.query<RestaurantType[], undefined>({
      query: () => '' // Consulta sem parâmetros adicionais
    }),

    // Define o endpoint para obter um restaurante específico pelo ID
    getSelectedRestaurant: builder.query<RestaurantType, string>({
      query: (id) => `${id}` // Consulta com o ID do restaurante
    }),

    // Define o endpoint para realizar uma compra
    purchase: builder.mutation<PurchaseResponse, OrderPayload>({
      query: (body) => ({
        url: 'https://fake-api-tau.vercel.app/api/efood/checkout', // URL para a requisição de compra
        method: 'POST', // Método HTTP POST
        body // Corpo da requisição contendo os dados do pedido
      })
    })
  })
})

// Exporta os hooks gerados automaticamente para os endpoints definidos
export const {
  useGetRestaurantsQuery, // Hook para obter a lista de restaurantes
  useGetSelectedRestaurantQuery, // Hook para obter um restaurante específico
  usePurchaseMutation // Hook para realizar uma compra
} = api

// Exporta a API como padrão
export default api
