import logokasawhite from '../assets/logo-kasa-white.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content"></div>
      <img className="footer__logo" src={logokasawhite} alt="Logo de Kasa" />
      <p className="footer__copyright">&copy; 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
