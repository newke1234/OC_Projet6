import React from 'react'
import { useState } from 'react'
import '../styles/dropdown.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function DropDownBox({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBox = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <div className={`box ${isOpen ? 'open' : ''}`}>
      <div className="box__title" onClick={toggleBox}>
        <div>{title}</div>
        <div>
          <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
        </div>
      </div>
      <div className="box__text-container">
        {isOpen &&
          content.map((item, index) => (
            <div key={index} className="box__text">
              {item}
            </div>
          ))}
      </div>
    </div>
  )
}

export default DropDownBox

// function AnimatedBoxGroup() {
//   const [openBoxes, setOpenBoxes] = useState([])

//   const toggleBox = (boxId) => {
//     setOpenBoxes((prevOpenBoxes) => {
//       if (prevOpenBoxes.includes(boxId)) {
//         return prevOpenBoxes.filter((id) => id !== boxId)
//       } else {
//         return [...prevOpenBoxes, boxId]
//       }
//     })
//   }

//   const isBoxOpen = (boxId) => {
//     return openBoxes.includes(boxId)
//   }

//   return (
//     <div className="animated-box-group">
//       {jsonData.map((box, index) => (
//         <div
//           key={index}
//           className={`box ${isBoxOpen(index) ? 'open' : ''}`}
//           onClick={() => toggleBox(index)}
//         >
//           <div className="box__title">
//             <div>{box.boxtitle}</div>
//             <div>
//               <FontAwesomeIcon
//                 icon={isBoxOpen(index) ? faChevronDown : faChevronUp}
//               />
//             </div>
//           </div>
//           <div className="box__text-container">
//             <div className="box__text">{box.boxtext}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default AnimatedBoxGroup
