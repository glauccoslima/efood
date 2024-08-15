import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import instagram from '../../assets/images/instagram.svg'

import * as S from './styles'

// Componente de rodapé do site
const Footer = () => (
  // Container principal do rodapé
  <S.FooterContainer>
    <div className="container">
      {/* Logo da efood */}
      <img src={logo} alt="Logo efood" />
      {/* Container para logos das redes sociais */}
      <S.Logos>
        {/* Logo do Instagram */}
        <img src={instagram} alt="Logo instagram" />
        {/* Logo do Facebook */}
        <img src={facebook} alt="Logo facebook" />
        {/* Logo do Twitter */}
        <img src={twitter} alt="Logo twitter" />
      </S.Logos>
      {/* Texto explicativo sobre a responsabilidade da plataforma */}
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </S.FooterContainer>
)

export default Footer
