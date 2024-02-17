import React from 'react'

function House(props) {
  const house = props.location?.state?.house // Utilisation optionnelle de l'opérateur de chaîne optionnelle (?.)

  if (!house) {
    // Gérer le cas où les données de la maison ne sont pas disponibles
    return <div>Les données de la maison ne sont pas disponibles.</div>
  }

  return (
    <div className="house-details">
      <h2>{house.title}</h2>
      {/* Affichez le reste des informations de la maison ici */}
    </div>
  )
}

export default House
