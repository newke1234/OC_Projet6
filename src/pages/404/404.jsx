import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/404.scss'

function Error() {
  return (
    <div className="errorContent">
      <div className="errorContent__quatrecentquatre">404</div>
      <div className="errorContent__oups">
        <p>Oups! la page que vous avez demandé n'existe pas</p>
      </div>
      <Link className="errorContent__homeLink" to="/">
        Retourner à la page d'accueil
      </Link>
    </div>
  )
}

export default Error
