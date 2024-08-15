import { createSlice } from '@reduxjs/toolkit' // Importa a função createSlice do Redux Toolkit para criar slices de estado

// Define o tipo CheckoutState que representa o estado do checkout
type CheckoutState = {
  deliveryIsOpen: boolean // Indica se a seção de entrega está aberta
  paymentIsOpen: boolean // Indica se a seção de pagamento está aberta
  confirmationIsOpen: boolean // Indica se a seção de confirmação está aberta
}

// Estado inicial do checkout
const initialState: CheckoutState = {
  deliveryIsOpen: false, // Inicialmente, a seção de entrega está fechada
  paymentIsOpen: false, // Inicialmente, a seção de pagamento está fechada
  confirmationIsOpen: false // Inicialmente, a seção de confirmação está fechada
}

// Cria o slice do checkout usando createSlice
const checkoutSlice = createSlice({
  name: 'checkout', // Nome do slice
  initialState, // Estado inicial do slice
  reducers: {
    // Redutor para abrir a seção de entrega
    openDelivery: (state) => {
      state.deliveryIsOpen = true
    },
    // Redutor para fechar a seção de entrega
    closeDelivery: (state) => {
      state.deliveryIsOpen = false
    },
    // Redutor para abrir a seção de pagamento
    openPayment: (state) => {
      state.paymentIsOpen = true
    },
    // Redutor para fechar a seção de pagamento
    closePayment: (state) => {
      state.paymentIsOpen = false
    },
    // Redutor para abrir a seção de confirmação
    openConfirmation: (state) => {
      state.confirmationIsOpen = true
    },
    // Redutor para fechar a seção de confirmação
    closeConfirmation: (state) => {
      state.confirmationIsOpen = false
    }
  }
})

// Exporta as ações geradas automaticamente pelo slice
export const {
  openDelivery, // Ação para abrir a seção de entrega
  closeDelivery, // Ação para fechar a seção de entrega
  openPayment, // Ação para abrir a seção de pagamento
  closePayment, // Ação para fechar a seção de pagamento
  openConfirmation, // Ação para abrir a seção de confirmação
  closeConfirmation // Ação para fechar a seção de confirmação
} = checkoutSlice.actions

// Exporta o redutor do slice como padrão
export default checkoutSlice.reducer
