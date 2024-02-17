import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import '../styles/carousel.scss'

function HouseCarousel({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1,
    )
  }

  const goToNextImage = () => {
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
        alt="House"
      />
      <FontAwesomeIcon icon={faChevronRight} onClick={goToNextImage} />
    </div>
  )
}

export default HouseCarousel
