import { Link, useLocation } from 'react-router-dom'
import logokasa from '../assets/logo-kasa.png'

function Header() {
  const location = useLocation() // Hook pour la barre de navigation  (pour souligner le lien de la page sur laquelle on se trouve)

  return (
    <div className="header">
      <img className="logokasa" src={logokasa} alt="Logo  de Kasa" />
      <nav className="navbar">
        <Link
          className={`navbar__link ${location.pathname === '/' ? 'active' : ''}`}
          to="/"
        >
          Accueil
        </Link>
        <Link
          className={`navbar__link ${location.pathname === '/About' ? 'active' : ''}`}
          to="/About"
        >
          A Propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
