import { configureStore } from '@reduxjs/toolkit' // Importa a função configureStore do Redux Toolkit para configurar a store

import cartReducer from './reducers/cart' // Importa o redutor do carrinho
import modalReducer from './reducers/modal' // Importa o redutor do modal
import checkoutReducer from './reducers/checkout' // Importa o redutor do checkout

import api from '../services/api' // Importa a API configurada

// Configura a store do Redux
export const store = configureStore({
  reducer: {
    cart: cartReducer, // Redutor do carrinho
    modal: modalReducer, // Redutor do modal
    checkout: checkoutReducer, // Redutor do checkout
    [api.reducerPath]: api.reducer // Redutor da API, necessário para o funcionamento dos endpoints
  },
  middleware: (getDefaultMiddleware) =>
    // Adiciona o middleware da API aos middlewares padrão
    getDefaultMiddleware().concat(api.middleware)
})

// Define o tipo RootReducer que representa o estado global da aplicação
export type RootReducer = ReturnType<typeof store.getState>
