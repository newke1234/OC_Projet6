import React from 'react'
import RatingStars from './RatingStars'
import '../styles/house.scss'

function HouseInfos({ house }) {
  // Affiche les infos détaillées pour le logement selectionné
  return (
    <div className="house-infos">
      <div className="house-infos__column1">
        <div>
          <h2 className="house-infos__column1__title">{house.title}</h2>
          <p className="house-infos__column1__location">{house.location}</p>
          <ul className="house-infos__column1__tags">
            {/* Affichage des tags dans une liste */}
            {house.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="house-infos__column2">
        <div className="house-infos__column2__host">
          <p>{house.host.name}</p>
          <img src={house.host.picture} alt={house.host.name}></img>
        </div>
        <div className="house-infos__column2__rating">
          {/* Affichage du rating sous forme d'étoiles */}
          <RatingStars rating={house.rating} />
        </div>
      </div>
    </div>
  )
}

export default HouseInfos
