import React from 'react'
import style from './BasementPage.module.css'
import figma from "../img/figma.svg"

const BasementPage = () => {
  return (
      <div className={style.floor} >
        <img src={figma} alt="Plan of Boiler Room" />
      </div>
  )
}

export default BasementPage;