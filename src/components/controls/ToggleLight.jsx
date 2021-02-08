import React from 'react'
import on from '../../img/LightSwControl_ON.png'
import off from '../../img/LightSwControl_OFF.png'
import style from './ToggleLight.module.css'
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
