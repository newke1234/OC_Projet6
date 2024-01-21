import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <img src="../assets/logo-kasa.svg" alt="" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/About">A Propos</Link>
      </nav>
    </div>
  )
}

export default Header
