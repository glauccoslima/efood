import { Provider } from 'react-redux' // Importa o componente Provider do react-redux para fornecer a store do Redux à aplicação
import { BrowserRouter } from 'react-router-dom' // Importa o componente BrowserRouter do react-router-dom para gerenciar as rotas

import Rotas from './routes' // Importa o componente Rotas que define as rotas da aplicação
import Cart from './components/Cart' // Importa o componente Cart que exibe o carrinho de compras
import Modal from './components/Modal' // Importa o componente Modal que exibe modais na aplicação
import Checkout from './components/Checkout' // Importa o componente Checkout que gerencia o processo de checkout

import { store } from './store' // Importa a store configurada do Redux

import { GlobalCSS } from './styles' // Importa os estilos globais da aplicação

// Componente principal da aplicação
function App() {
  return (
    // Provider fornece a store do Redux para toda a aplicação
    <Provider store={store}>
      {/* BrowserRouter gerencia as rotas da aplicação */}
      <BrowserRouter>
        <div className="App">
          {/* GlobalCSS aplica os estilos globais à aplicação */}
          <GlobalCSS />
        </div>
        {/* Rotas define as rotas da aplicação */}
        <Rotas />
        {/* Cart exibe o carrinho de compras */}
        <Cart />
        {/* Checkout gerencia o processo de checkout */}
        <Checkout />
        {/* Modal exibe modais na aplicação */}
        <Modal />
      </BrowserRouter>
    </Provider>
  )
}

export default App // Exporta o componente App como padrão
