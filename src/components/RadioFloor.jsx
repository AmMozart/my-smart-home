import React from 'react'
import style from './RadioFloor.module.css'
import { NavLink, useLocation } from 'react-router-dom'

export default () => {
  let location = useLocation()
  let currentPath = location.pathname
  
  return (
  <div className={style.radioContainer}>
    <NavLink className={currentPath === '/BasementPage' ? style.active : null} to="/BasementPage">Котельная</NavLink>
    <NavLink className={currentPath === '/FirstFloorPage' ? style.active : null} to="/FirstFloorPage">1 Этаж</NavLink>
    <NavLink className={currentPath === '/SecondFloorPage' ? style.active : null} to="/SecondFloorPage">2 Этаж</NavLink>
    <NavLink className={currentPath === '/MansardPage' ? style.active : null} to="/MansardPage">Мансарда</NavLink>
    <NavLink className={currentPath === '/GardenPage' ? style.active : null} to="/GardenPage">Улица</NavLink>
  </div>
)
}