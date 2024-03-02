import React from 'react'
import coast from '../assets/banner/coast.jpg'
import mountains from '../assets/banner/mountains.jpg'

import { useLocation } from 'react-router-dom' // hook qui permet de récuperer l'URL de la page

const Banner = () => {
  const location = useLocation()

  // On change l'image et le texte de la bannière en fonction de l'URL

  const getImageForURL = () => {
    return location.pathname.includes('About') ? mountains : coast
  }

  const getTitleForURL = () => {
    return location.pathname.includes('About')
      ? ''
      : 'Chez vous, partout et ailleurs!'
  }

  return (
    <div className="banner">
      <img
        className="banner__img"
        src={getImageForURL()}
        alt="un bord de mer agité et montagneux"
      />
      <h2 className="banner__title">{getTitleForURL()}</h2>
    </div>
  )
}

export default Banner
