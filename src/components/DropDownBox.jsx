import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function DropDownBox({ title, content, page }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBox = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <div className={`${page}-box ${isOpen ? 'open' : ''}`}>
      <div className={`${page}-box__title`} onClick={toggleBox}>
        <div>{title}</div>
        <div>
          <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
        </div>
      </div>
      <div className={`${page}-box__text-container`}>
        {isOpen && content.map((item, index) => <div key={index}>{item}</div>)}
      </div>
    </div>
  )
}

export default DropDownBox
