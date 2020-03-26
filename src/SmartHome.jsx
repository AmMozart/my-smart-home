import React from 'react';
import style from './SmartHome.module.css';
import ToggleSystem from './controls/ToggleSystem'
import ToggleLight from './controls/ToggleLight'
import { SET_TOGGLE_VALUE } from './var'
import DetailsPage from './components/DetailsPage'

class SmartHome extends React.Component {
  constructor(props) {
    super(props)
    this.store = props.store
    this.state = props.store.getState()
    this.changeValue = this.changeValue.bind(this)
  }

  componentDidMount() {
    console.log("DidMount...")
  }
  componentDidUpdate() {
    console.log("DidUpdate...")
  }
  componentWillUnmount() {
    console.log("WillUnmount...")
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
        
        <DetailsPage store={this.store} />
      </div>
    );
  }
}

export default SmartHome;