import React from 'react'
import style from './Header.module.css'

export default () => (
  <div className={style.header}>
    <i className="fa fa-home fa-5x" aria-hidden="true"></i>
    <div className={style['cssload-container']}>
      <div className={style['cssload-item']}></div>
    </div>
  </div>
)
