import React from 'react';
import style from './SmartHome.module.css';
import { SET_TOGGLE_VALUE } from './var'
import MansardPage from './pages/MansardPage'
import BasementPage from './pages/BasementPage'
import FirstFloorPage from './pages/FirstFloorPage'
import SecondFloorPage from './pages/SecondFloorPage'
import GardenPage from './pages/GardenPage'
import CamPage from './pages/CamPage'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route } from 'react-router-dom'
import WeatherPage from './pages/WeatherPage'

class SmartHome extends React.Component {
  constructor(props) {
    super(props)
    this.store = props.store
    this.state = props.store.getState()
    this.changeValue = this.changeValue.bind(this)
  }

  changeValue(e) {
    const cpyState = { ...this.state }
    cpyState.statusReducer[e.target.name] = e.target.checked

    this.setState(cpyState)
    this.props.store.dispatch({
      type: SET_TOGGLE_VALUE,
      data: {
        name: e.target.name,
        value: e.target.checked
      }
    })
  }

  render() {
    return (
      <div className={style.smartHome} >
        <BrowserRouter>
          <div className={style.h}>
            <Header />
          </div>
          <div className={style.c}>
            <Route path="/" exact>
              <HomePage store={this.store} />
            </Route>
            <Route path="/BasementPage">
              <BasementPage store={this.store} />
            </Route>
            <Route path="/FirstFloorPage">
              <FirstFloorPage store={this.store} />
            </Route>
            <Route path="/SecondFloorPage">
              <SecondFloorPage store={this.store} />
            </Route>
            <Route path="/MansardPage">
              <MansardPage store={this.store} />
            </Route>
            <Route path="/GardenPage">
              <GardenPage store={this.store} />
            </Route>
            <Route path='/Cam'>
              <CamPage />
            </Route>
            <Route path='/Weather'>
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
}

export default SmartHome