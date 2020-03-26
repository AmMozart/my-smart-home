import React from 'react'
import style from './Toggle.module.css'

export default ({ name, value, changeValue }) => (
  <input className={`${style.size} ${style.hide}`}
    name={name}
    type="checkbox"
    onChange={changeValue}
    checked={value}
  />
)
