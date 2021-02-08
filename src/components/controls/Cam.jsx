import React from 'react';
import style from './Cam.module.css'
import { HOST_IP } from '../../var'

class Cam extends React.Component {
  constructor(props) {
    super(props)
    this.id = props.id
    this.player = null
    this.active = props.active
  }
  componentDidMount() {
    this.player || (this.player = new window.JSMpeg.Player(`ws://${HOST_IP}:9999`, {
      canvas: document.getElementById(this.id)
    }))
    if (this.player) this.player.play()
  }

  componentWillUnmount() {
    if (this.player) this.player.stop()
  }
  render() {

    return (
      <div className={style.cam} >
        <canvas id={this.id}></canvas>
      </div>
    );
  }
}

export default Cam