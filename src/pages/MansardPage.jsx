import React from 'react';
import style from './MansardPage.module.css';
import { SET_TOGGLE_VALUE } from '../var'
import figma from "../img/figma.svg"

class MansardPage extends React.Component {
  constructor(props) {
    super(props)
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
      <div className={style.floor} >
        <img src={figma} alt="Plan of First Floor Page" />
      </div>
    );
  }
}

export default MansardPage
