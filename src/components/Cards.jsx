import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import housesData from '../datas/houses.json'
import '../styles/cards.scss'

function Cards() {
  const [jsonData] = useState(housesData)

  // Vérifiez si l'ID du logement existe dans les données JSON
  const isHouseIdValid = (id) => jsonData.some((house) => house.id === id)

  return (
    <ul className="cards">
      {jsonData.map((house, id) => (
        <li key={id} className="cards__house">
          <Link to={{ pathname: `/house/${house.id}` }}>
            <img
              className="cards__house__image"
              src={house.cover}
              alt={house.title}
            />
            <div className="cards__house__gradient"></div>
            <div className="cards__house__title">{house.title}</div>
          </Link>
        </li>
      ))}
      {/* Si aucun logement n'a été trouvé pour un ID donné, rediriger directement vers la page 404 */}
      {!isHouseIdValid && <Link to="/404" style={{ display: 'none' }} />}
    </ul>
  )
}

export default Cards
