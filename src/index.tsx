import { StrictMode } from 'react' // Importa StrictMode do React para identificar problemas no código
import { createRoot } from 'react-dom/client' // Importa createRoot do react-dom/client para renderizar a aplicação no DOM
import App from './App' // Importa o componente principal da aplicação
import reportWebVitals from './reportWebVitals' // Importa a função para medir a performance da aplicação

// Cria a raiz do React no elemento com o ID 'root'
const root = createRoot(document.getElementById('root') as HTMLElement)

// Renderiza a aplicação dentro do StrictMode, que ajuda a identificar problemas no código
root.render(
  <StrictMode>
    <App /> {/* Renderiza o componente principal da aplicação */}
  </StrictMode>
)

// Função para medir a performance da aplicação
// Para começar a medir a performance, passe uma função para logar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um endpoint de analytics. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals()
