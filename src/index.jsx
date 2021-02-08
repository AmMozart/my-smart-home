import React from 'react'
import ReactDOM from 'react-dom'
import SmartHome from './SmartHome'
import store from './store'
import './index.css'

ReactDOM.render(<SmartHome store={store} />, document.getElementById('root'))