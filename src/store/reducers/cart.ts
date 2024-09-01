import { createSlice, PayloadAction } from '@reduxjs/toolkit' // Importa funções para criar slices e definir ações com payload
import { toast } from 'react-toastify' // Importa a função toast do react-toastify
import 'react-toastify/dist/ReactToastify.css' // Importa os estilos do react-toastify

// Define o tipo CartState que representa o estado do carrinho
type CartState = {
  items: ProductType[] // Lista de itens no carrinho
  isOpen: boolean // Indica se o carrinho está aberto ou fechado
}

// Estado inicial do carrinho
const initialState: CartState = {
  items: [], // Inicialmente, o carrinho está vazio
  isOpen: false // Inicialmente, o carrinho está fechado
}

// Cria o slice do carrinho usando createSlice
const cartSlice = createSlice({
  name: 'cart', // Nome do slice
  initialState, // Estado inicial do slice
  reducers: {
    // Redutor para adicionar um item ao carrinho
    add: (state, action: PayloadAction<ProductType>) => {
      // Verifica se o produto já está no carrinho
      const product = state.items.find((item) => item.id === action.payload.id)

      // Se o produto não estiver no carrinho, adiciona-o
      if (!product) {
        state.items.push(action.payload)
      } else {
        // Se o produto já estiver no carrinho, exibe uma notificação
        toast.warn('O produto já foi adicionado ao carrinho!')
      }
    },
    // Redutor para remover um item do carrinho pelo ID
    remove: (state, action: PayloadAction<number>) => {
      // Filtra os itens para remover o item com o ID especificado
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    // Redutor para abrir o carrinho
    open: (state) => {
      state.isOpen = true
    },
    // Redutor para fechar o carrinho
    close: (state) => {
      state.isOpen = false
    },
    // Redutor para limpar todos os itens do carrinho
    cleanCart: (state) => {
      state.items = []
    }
  }
})

// Exporta as ações geradas automaticamente pelo slice
export const { add, remove, open, close, cleanCart } = cartSlice.actions

// Exporta o redutor do slice como padrão
export default cartSlice.reducer
