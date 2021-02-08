import React from 'react';
import style from './DetailsPage.module.css';
import ToggleSystem from '../components/controls/ToggleSystem'
import ToggleLight from '../components/controls/ToggleLight'
import { SET_TOGGLE_VALUE } from '../var'

class DetailsPage extends React.Component {
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
      <div className={style.detailsPage} >
        <ToggleLight
          description="0-01L"
          name="Люстра"
          value={this.state.statusReducer['0-01L']}
          changeValue={this.changeValue}
        />
        <ToggleLight
          description="0-02L"
          name="Торшер"
          value={this.state.statusReducer['0-02L']}
          changeValue={this.changeValue}
        />
        <ToggleLight
          description="0-03L"
          name="Точечный свет"
          value={this.state.statusReducer['0-03L']}
          changeValue={this.changeValue}
        />
        <ToggleSystem
          description="0-04L"
          name="Система"
          value={this.state.statusReducer['0-04L']}
          changeValue={this.changeValue}
        />

      </div>
    );
  }
}

export default DetailsPage;