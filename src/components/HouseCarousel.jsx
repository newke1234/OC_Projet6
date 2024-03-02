import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import '../styles/houseCarousel.scss'

function HouseCarousel({ pictures, imgalt }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goToPreviousImage = () => {
    // Fleche de navigation gauche
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1,
    )
  }

  const goToNextImage = () => {
    // Fleche de navigation droite
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div className="house-carousel">
      <FontAwesomeIcon icon={faChevronLeft} onClick={goToPreviousImage} />
      <img
        className="house-carousel__image"
        src={pictures[currentImageIndex]}
        alt={imgalt}
      />
      <FontAwesomeIcon icon={faChevronRight} onClick={goToNextImage} />
    </div>
  )
}

export default HouseCarousel
