import React from 'react'
import Banner from '../../components/Banner'
import DropDownBox from '../../components/DropDownBox'
import jsonData from '../../datas/about-boxes.json'
import '../../styles/dropdown.scss'

function About() {
  return (
    <div>
      <Banner />
      <div className="animated-box-group">
        {jsonData.map((box, index) => (
          <DropDownBox
            key={index}
            title={box.boxtitle}
            content={[box.boxtext]}
          />
        ))}
      </div>
    </div>
  )
}

export default About

// import Banner from '../../components/Banner'
// import DropDownBox from '../../components/DropDownBox'
// import '../../styles/dropdown.scss'

// function About() {
//   return (
//     <div>
//       <Banner />
//       <DropDownBox />
//     </div>
//   )
// }

// export default About
