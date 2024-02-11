import React from 'react'
import { useState } from 'react'
import jsonData from '../datas/about-boxes.json'
import '../styles/dropdown.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function AnimatedBoxGroup() {
  const [openBoxes, setOpenBoxes] = useState([])

  const toggleBox = (boxId) => {
    setOpenBoxes((prevOpenBoxes) => {
      if (prevOpenBoxes.includes(boxId)) {
        return prevOpenBoxes.filter((id) => id !== boxId)
      } else {
        return [...prevOpenBoxes, boxId]
      }
    })
  }

  const isBoxOpen = (boxId) => {
    return openBoxes.includes(boxId)
  }

  return (
    <div className="animated-box-group">
      {jsonData.map((box, index) => (
        <div
          key={index}
          className={`box ${isBoxOpen(index) ? 'open' : ''}`}
          onClick={() => toggleBox(index)}
        >
          <div className="box-title">
            <div>{box.boxtitle}</div>
            <div>
              <FontAwesomeIcon
                icon={isBoxOpen(index) ? faChevronDown : faChevronUp}
              />
            </div>
          </div>
          <div className="box-text-container">
            <div className="box-text">{box.boxtext}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnimatedBoxGroup
