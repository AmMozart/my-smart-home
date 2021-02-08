import React from 'react'
import style from './RadioFloor.module.css'
import { NavLink } from 'react-router-dom'

export default () => (
  <div className={style.radioContainer}>
    <NavLink to="/Floor0">Котельная</NavLink>
    <NavLink to="/Floor1">1 Этаж</NavLink>
    <NavLink to="/Floor2">2 Этаж</NavLink>
    <NavLink to="/Floor3">Мансарда</NavLink>
    <NavLink to="/Garden">Улица</NavLink>
  </div>
)