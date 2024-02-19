import React from 'react'
import RatingStars from './RatingStars'
import '../styles/house.scss'

function HouseInfos({ house }) {
  return (
    <div className="house-infos">
      <div className="house-infos-line1">
        <div>
          <h2 className="house-infos-line1__title">{house.title}</h2>
          <p className="house-infos-line1__location">{house.location}</p>
        </div>
        <div className="house-infos-line1__host">
          <p>{house.host.name}</p>
          <img src={house.host.picture} alt={house.host.name}></img>
        </div>
      </div>
      <div className="house-infos-line2">
        <ul className="house-infos-line2__tags">
          {/* Affichage des tags dans une liste */}
          {house.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <div className="house-infos-line2__rating">
          {/* Affichage du rating sous forme d'étoiles */}
          <RatingStars rating={parseFloat(house.rating)} />
        </div>
      </div>
    </div>
  )
}

export default HouseInfos
