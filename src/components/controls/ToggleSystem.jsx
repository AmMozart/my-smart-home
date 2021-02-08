import React from 'react'
import on from '../../img/SceneON.png'
import off from '../../img/SceneOFF.png'
import style from './ToggleSystem.module.css'
import Toggle from './Toggle'

export default ({ description, name, value, changeValue }) => (
  <div className={style.toggle}>
    <div className={style.control}>
      <img className={`${style.size}`} src={value ? on : off} alt="Индикатор" />
      <Toggle name={description} value={value} changeValue={changeValue} />
    </div>
    <div className={style.name}>{name}</div>
  </div>
)
