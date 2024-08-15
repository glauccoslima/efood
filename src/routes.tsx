import { Route, Routes } from 'react-router-dom' // Importa os componentes Route e Routes do react-router-dom para definir as rotas

import Home from './pages/Home' // Importa o componente Home que representa a página inicial
import Perfil from '../src/pages/Perfil' // Importa o componente Perfil que representa a página de perfil do restaurante

// Componente Rotas que define as rotas da aplicação
const Rotas = () => (
  <Routes>
    {/* Define a rota para a página inicial */}
    <Route path="/" element={<Home />} />
    {/* Define a rota para a página de perfil do restaurante, utilizando um parâmetro de ID */}
    <Route path="/restaurant/:id" element={<Perfil />} />
  </Routes>
)

export default Rotas // Exporta o componente Rotas como padrão
