import React, { useState, useEffect } from 'react'
import housesData from '../datas/houses.json'

function Cards() {
  const [jsonData] = useState(housesData)

  useEffect(() => {
    console.log(jsonData) // Vérifiez les données dans la console
  })

  return (
    <div className="cards">
      {jsonData.map((house, id) => (
        <div key={id} className="cards__house">
          <img className="cards__image" src={house.cover} alt={house.title} />
          <div className="cards__title">{house.title}</div>
        </div>
      ))}
    </div>
  )
}

export default Cards

// function MonComposant() {
//     const [data, setData] = useState(jsonData);

//     return (
//       <div>
//         <h1>{data.title}</h1>
//         <img src={data.cover} alt={data.title} />

//         <p>{data.description}</p>

//         <h2>Équipements:</h2>
//         <ul>
//           {data.equipments.map((equipment, index) => (
//             <li key={index}>{equipment}</li>
//           ))}
//         </ul>

//         <h2>Photos:</h2>
//         <div>
//           {data.pictures.map((picture, index) => (
//             <img key={index} src={picture} alt={`Photo ${index + 1}`} />
//           ))}
//         </div>

//         <h2>Tags:</h2>
//         <ul>
//           {data.tags.map((tag, index) => (
//             <li key={index}>{tag}</li>
//           ))}
//         </ul>

//         <h2>Informations sur l'hôte:</h2>
//         <p>Nom de l'hôte: {data.host.name}</p>
//         <img src={data.host.picture} alt="Photo de l'hôte" />

//         <h2>Localisation:</h2>
//         <p>{data.location}</p>

//         <h2>Évaluation:</h2>
//         <p>Évaluation: {data.rating}</p>
//       </div>
//     );
//   }
