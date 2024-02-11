import React, { useState } from 'react'
import housesData from '../datas/houses.json'

function Cards() {
  const [jsonData] = useState(housesData)

  // useEffect(() => {
  //   console.log(jsonData) // Vérifiez les données dans la console
  // })

  return (
    <ul className="cards">
      {jsonData.map((house, id) => (
        <li key={id} className="cards__house">
          <img
            className="cards__house__image"
            src={house.cover}
            alt={house.title}
          />
          <div className="cards__house__gradient"></div>
          <div className="cards__house__title">{house.title}</div>
        </li>
      ))}
    </ul>
  )
}

export default Cards
