// import React, { useState } from 'react'
// import boxDatas from '../../datas/about-boxes.json'
import Banner from '../../components/Banner'
import AnimatedBoxGroup from '../../components/DropDownBox'
import '../../styles/dropdown.scss'

function About() {
  // const [JsonBoxData] = useState(boxDatas)

  return (
    <div>
      <Banner />
      <AnimatedBoxGroup />
    </div>
  )
}

export default About
