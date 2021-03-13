import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import SmartHome from './components/SmartHome'
import store from './store'
import './index.css'
import style from './css/font-awesome.min.css'

ReactDOM.render(
    <Provider store={store} >
        <SmartHome />
    </Provider>, document.getElementById('root'))
