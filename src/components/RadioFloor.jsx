import React from 'react'
import style from './RadioFloor.module.css'
import { NavLink } from 'react-router-dom'

export default () => (
  <div className={style.radioContainer}>
    <NavLink to="/BasementPage">Котельная</NavLink>
    <NavLink to="/FirstFloorPage">1 Этаж</NavLink>
    <NavLink to="/SecondFloorPage">2 Этаж</NavLink>
    <NavLink to="/MansardPage">Мансарда</NavLink>
    <NavLink to="/GardenPage">Улица</NavLink>
  </div>
)