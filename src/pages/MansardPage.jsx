import React from 'react'
import style from './MansardPage.module.css'
import figma from "../img/figma.svg"

const MansardPage = () => {
    return (
      <div className={style.floor} >
        <img src={figma} alt="Plan of First Floor Page" />
      </div>
    );
  }

export default MansardPage
