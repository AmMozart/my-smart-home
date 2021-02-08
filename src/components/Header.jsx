import React from 'react'
import style from './Header.module.css'
import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()
  function pathToHome() {
    history.push('/')
  }
  function pathToWeather() {
    history.push('/Weather')
  }
  return (
    <div className={style.header}>
      <div className={style.home}>
        <div className="fa fa-home fa-3x" aria-hidden="true" onClick={pathToHome}></div>
      </div>
      <div className={style.left}>
        <div className="fa fa-bolt fa-2x" aria-hidden="true"></div>
        <div className="fa fa-bell fa-2x" aria-hidden="true"></div>
        <div className="fa fa-cube fa-2x" aria-hidden="true"></div>
        <div className="fa fa-unlock fa-2x" aria-hidden="true"></div>
      </div>
      <div className={style.center}>
        <div className="fa fa-unlock fa-2x" aria-hidden="true"></div>
        <div className="fa fa-sun fa-2x" aria-hidden="true" onClick={pathToWeather}></div>
      </div>
      <div className={style.right}>
        <div className="fa fa-cloud fa-2x" aria-hidden="true"></div>
        <div className="fa fa-tint fa-2x" aria-hidden="true"></div>
        <div className="fa fa-lock fa-2x" aria-hidden="true"></div>
      </div>
      {/* <div className={style['cssload-container']}>
        <div className={style['cssload-item']}></div>
      </div> */}
    </div>
  )
} 