import React from 'react' // Importa a biblioteca React para criar componentes
import ReactDOM from 'react-dom/client' // Importa a função ReactDOM para renderizar a aplicação no DOM
import App from './App' // Importa o componente principal da aplicação
import reportWebVitals from './reportWebVitals' // Importa a função para medir a performance da aplicação

// Cria a raiz do React no elemento com o ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// Renderiza a aplicação dentro do StrictMode, que ajuda a identificar problemas no código
root.render(
  <React.StrictMode>
    <App /> {/* Renderiza o componente principal da aplicação */}
  </React.StrictMode>
)

// Função para medir a performance da aplicação
// Para começar a medir a performance, passe uma função para logar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um endpoint de analytics. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals()
