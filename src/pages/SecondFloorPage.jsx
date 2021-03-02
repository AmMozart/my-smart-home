import React from 'react'
import style from './SecondFloorPage.module.css'
import figma from "../img/figma.svg"

const SecondFloorPage = () => {
    return (
      <div className={style.floor} >
        <img src={figma} alt="Plan of Second Floor Page" />
      </div>
    )
  }

export default SecondFloorPage;
