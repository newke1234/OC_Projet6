import { Link } from 'react-router-dom'
import logokasa from '../assets/logo-kasa.png'

function Header() {
  return (
    <div className="header">
      <img className="logokasa" src={logokasa} alt="Logo  de Kasa" />
      <nav className="navbar">
        <Link className="navbar__link" to="/">
          Accueil
        </Link>
        <Link className="navbar__link" to="/About">
          A Propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
