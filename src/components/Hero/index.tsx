import { Title, HeroContainer } from './styles' // Importa os componentes estilizados

import logo from '../../assets/images/logo.svg' // Importa a imagem do logo

// Componente Hero que representa a seção principal do site
const Hero = () => (
  // Container principal do Hero
  <HeroContainer>
    <div className="container">
      {/* Logo da efood */}
      <img src={logo} alt="Logo efood" />
      {/* Título principal do Hero */}
      <Title>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Title>
    </div>
  </HeroContainer>
)

export default Hero
