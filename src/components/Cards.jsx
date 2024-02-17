import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import housesData from '../datas/houses.json'

function Cards() {
  const [jsonData] = useState(housesData)

  return (
    <ul className="cards">
      {jsonData.map((house, id) => (
        <li key={id} className="cards__house">
          <Link to={{ pathname: `/house/${house.id}`, state: { house } }}>
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
    </ul>
  )
}

export default Cards
