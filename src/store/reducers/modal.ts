import { createSlice, PayloadAction } from '@reduxjs/toolkit' // Importa funções para criar slices e definir ações com payload

// Define o tipo ModalState que representa o estado do modal
type ModalState = {
  item: ProductType // Item do tipo ProductType que será exibido no modal
  isOpen: boolean // Indica se o modal está aberto ou fechado
}

// Estado inicial do modal
const initialState: ModalState = {
  item: {
    foto: '', // Foto do produto, inicialmente vazio
    preco: 0, // Preço do produto, inicialmente 0
    id: 0, // ID do produto, inicialmente 0
    nome: '', // Nome do produto, inicialmente vazio
    descricao: '', // Descrição do produto, inicialmente vazio
    porcao: '' // Porção do produto, inicialmente vazio
  },
  isOpen: false // Inicialmente, o modal está fechado
}

// Cria o slice do modal usando createSlice
const modalSlice = createSlice({
  name: 'modal', // Nome do slice
  initialState, // Estado inicial do slice
  reducers: {
    // Redutor para adicionar um item ao modal
    add: (state, action: PayloadAction<ProductType>) => {
      state.item = action.payload // Define o item do modal com o payload da ação
    },
    // Redutor para abrir o modal
    open: (state) => {
      state.isOpen = true // Define isOpen como true para abrir o modal
    },
    // Redutor para fechar o modal
    close: (state) => {
      state.isOpen = false // Define isOpen como false para fechar o modal
    }
  }
})

// Exporta as ações geradas automaticamente pelo slice
export const { add, open, close } = modalSlice.actions

// Exporta o redutor do slice como padrão
export default modalSlice.reducer
