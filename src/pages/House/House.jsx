import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import housesData from '../../datas/houses.json'
import HouseCarousel from '../../components/HouseCarousel'
import HouseInfos from '../../components/HouseInfos'
import DropDownBox from '../../components/DropDownBox'
import '../../styles/house.scss'
import '../../styles/dropdown-house.scss'

function House() {
  const { id } = useParams()
  const house = housesData.find((house) => house.id === id)

  // Si aucun logement n'est trouvé pour l'ID spécifié, redirige vers la page 404
  if (!house) {
    return <Navigate to="/404" />
  }

  return (
    <div className="house">
      <HouseCarousel pictures={house.pictures} />
      <HouseInfos house={house} />
      <div className="house-box-group">
        <DropDownBox
          page="house-description"
          title="Description"
          content={[house.description]}
        />
        <DropDownBox
          page="house-equip"
          title="Équipements"
          content={house.equipments}
        />
      </div>
    </div>
  )
}

export default House
