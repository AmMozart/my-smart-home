import React from 'react'
import style from './SmartHome.module.css'
import MansardPage from '../pages/MansardPage'
import BasementPage from '../pages/BasementPage'
import FirstFloorPageContainer from '../pages/FirstFloorPageContainer'
import SecondFloorPage from '../pages/SecondFloorPage'
import GardenPage from '../pages/GardenPage'
import CamPage from '../pages/CamPage'
import Header from './Header'
import Footer from './Footer'
import HomePage from '../pages/HomePage'
import { BrowserRouter, Route } from 'react-router-dom'
import WeatherPage from '../pages/WeatherPage'

const SmartHome = () => {

    return (
      <div className={style.smartHome} >
        <BrowserRouter>
          <div className={style.h}>
            <Header/>
          </div>
          <div className={style.c}>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/BasementPage" >
              <BasementPage />
            </Route>
            <Route path="/FirstFloorPage" >
              <FirstFloorPageContainer />
            </Route>
            <Route path="/SecondFloorPage" >
              <SecondFloorPage />
            </Route>
            <Route path="/MansardPage" >
              <MansardPage />
            </Route>
            <Route path="/GardenPage" >
              <GardenPage />
            </Route>
            <Route path='/Cam' >
              <CamPage />
            </Route>
            <Route path='/Weather' >
              <WeatherPage />
            </Route>
          </div>
          <div className={style.f}>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }

export default SmartHome