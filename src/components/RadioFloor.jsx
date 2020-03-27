import React from 'react'
import style from './RadioFloor.module.css'
import { NavLink } from 'react-router-dom'

export default () => (
  <div className={style.radioContainer}>
    <div><NavLink to="/Details">Цоколь</NavLink></div>
    <div><NavLink to="/Floor1">1 Этаж</NavLink></div>
    <div><NavLink to="/Floor2">2 Этаж</NavLink></div>
    <div><NavLink to="/Floor3">3 Этаж</NavLink></div>
  </div>
)