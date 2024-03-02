import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function RatingStars({ rating }) {
  // Affichage des étoiles
  const totalStars = 5 // Nombre d'etoiles a afficher
  const fullStars = Math.floor(rating) // Calcul Nombre d'étoiles pleines (rouges) a afficher

  return (
    <div>
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
      ))}
      {[...Array(totalStars - fullStars)].map((_, index) => (
        <FontAwesomeIcon
          key={fullStars + index}
          icon={faStar}
          color="#ccc"
          className="star-icon"
        />
      ))}
    </div>
  )
}

export default RatingStars
