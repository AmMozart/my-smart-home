import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import SmartHome from './components/SmartHome'
import store from './store'
import './index.css'

ReactDOM.render(
    <Provider store={store} >
        <SmartHome />
    </Provider>, document.getElementById('root'))