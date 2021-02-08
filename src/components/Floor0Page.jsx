import React from 'react'
import style from './Floor0Page.module.css'
import { SET_TOGGLE_VALUE } from '../var'
import figma from "../img/figma.svg"
import ToggleLigft from '../components/controls/ToggleLight'

class Floor0Page extends React.Component {
  constructor(props) {
    super(props)
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
      <div className={style.floor} >
        <div className={style.plan} >
          <img src={figma} alt="Plan 0 floor" />
          <div className={style.light_01} >
            <ToggleLigft
              description="0-01L"
              name=""
              value={this.state.statusReducer['0-01L']}
              changeValue={this.changeValue}
            />
          </div>
          <div className={style.light_02} >
            <ToggleLigft
              description="0-02L"
              name=""
              value={this.state.statusReducer['0-02L']}
              changeValue={this.changeValue}
            />
          </div>
          <div className={style.light_03} >
            <ToggleLigft
              description="0-03L"
              name=""
              value={this.state.statusReducer['0-03L']}
              changeValue={this.changeValue}
            />
          </div>
          <div className={style.light_04} >
            <ToggleLigft
              description="0-04L"
              name=""
              value={this.state.statusReducer['0-04L']}
              changeValue={this.changeValue}
            />
          </div>
          <div className={style.light_05} >
            <ToggleLigft
              description="0-05L"
              name=""
              value={this.state.statusReducer['0-05L']}
              changeValue={this.changeValue}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Floor0Page;