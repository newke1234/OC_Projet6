import React from 'react'
import { useParams } from 'react-router-dom'
import housesData from '../../datas/houses.json'
import HouseCarousel from '../../components/HouseCarousel'
import { Navigate } from 'react-router-dom'

function House() {
  const { id } = useParams()
  const house = housesData.find((house) => house.id === id)

  // Si aucun logement n'est trouvé pour l'ID spécifié, redirigez vers la page 404
  if (!house) {
    return <Navigate to="/404" />
  }

  return (
    <div className="house-details">
      <h2>{house.title}</h2>
      <HouseCarousel pictures={house.pictures} />
      {/* Affichez le reste des informations de la maison ici */}
    </div>
  )
}

export default House
