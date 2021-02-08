import React from 'react'
import style from './Menu.module.css'
import { Route } from 'react-router-dom';
import Cam from './controls/Cam'

export default () => (
  <div className={style.menu}>
    <Route path='/' exact>
      <div className={style.sysBtn}>МЫ УШЛИ</div>
      <div className={style.sysBtn}>МЫ УЕХАЛИ</div>
      <div className={style.sysBtn}>ЛЕТО</div>
      <div className={style.sysBtn}>ЭКОНОМ РЕЖИМ</div>
      <div className={style.sysBtn}>МЫ ДОМА</div>
    </Route>

    <Route path='/Cam'>
      <Cam id='cam1' active={true} />
      <Cam id='cam2' />
      <Cam id='cam3' />
      {/* <Cam id='cam4' /> */}
    </Route>


  </div>
)
