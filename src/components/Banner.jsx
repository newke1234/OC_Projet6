import React from 'react'
import coast from '../assets/banner/coast.jpg'
import mountains from '../assets/banner/mountains.jpg'

import { useLocation } from 'react-router-dom'

const Banner = () => {
  const location = useLocation()

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

// function Banner() {
//   return (
//     <div className="banner">
//       <img
//         className="banner__img"
//         src={coast}
//         alt="un bord de mer agité et montagneux"
//       />
//       <h2 className="banner__title">Chez vous, partout et ailleurs</h2>
//     </div>
//   )
// }

export default Banner
