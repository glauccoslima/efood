import { BarLoader } from 'react-spinners' // Importa o componente de carregamento BarLoader da biblioteca react-spinners

import { Container } from './styles' // Importa o componente estilizado Container

// Componente Loader que exibe um indicador de carregamento
const Loader = () => (
  // Container principal do Loader
  <Container>
    {/* Componente de carregamento com a cor definida */}
    <BarLoader color={'#af1d1d'} />
  </Container>
)

export default Loader
