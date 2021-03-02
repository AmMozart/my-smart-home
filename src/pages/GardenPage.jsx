import React from 'react';
import style from './GardenPage.module.css';
import figma from "../img/figma.svg"

const GardenPage = () => {

    return (
      <div className={style.floor} >
        <img src={figma} alt="Plan 0 floor" />
      </div>
    )
  }

export default GardenPage;