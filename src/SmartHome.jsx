import React from 'react';
import style from './SmartHome.module.css';
import { SET_TOGGLE_VALUE } from './var'
// import DetailsPage from './components/DetailsPage'
import Floor0Page from './components/Floor0Page'
import Floor1Page from './components/Floor1Page'
import Floor2Page from './components/Floor2Page'
import Floor3Page from './components/Floor3Page'
import ZoneGarden from './components/ZoneGarden'
import CamPage from './components/CamPage'
import Header from './components/Header'
// import Menu from './components/Menu'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'

class SmartHome extends React.Component {
  constructor(props) {
    super(props)
    this.store = props.store
    this.state = props.store.getState()
    this.changeValue = this.changeValue.bind(this)
  }

  componentDidMount() {
    // console.log("DidMount...")
  }
  componentDidUpdate() {
    // console.log("DidUpdate...")
  }
  componentWillUnmount() {
    // console.log("WillUnmount...")
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
          <div className={style.h}><Header /></div>
          <div className={style.c}>
            <Route path="/" exact>
              <HomePage store={this.store} />
            </Route>
            <Route path="/Floor1">
              <Floor1Page store={this.store} />
            </Route>
            <Route path="/Floor2">
              <Floor2Page store={this.store} />
            </Route>
            <Route path="/Floor3">
              <Floor3Page store={this.store} />
            </Route>
            <Route path="/Floor0">
              <Floor0Page store={this.store} />
            </Route>
            <Route path="/Garden">
              <ZoneGarden store={this.store} />
            </Route>
            <Route path='/Cam'>
              <CamPage />
            </Route>
            <Route path='/Weather'>
              <App />
            </Route>
            {/* <div className={style.n}>
              <Route path='/' exact>
                <Menu />
              </Route>
            </div> */}
          </div>

          <div className={style.f}><Footer /></div>
        </BrowserRouter>
      </div>
    );
  }
}

export default SmartHome;