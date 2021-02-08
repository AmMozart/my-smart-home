import React from 'react';
import style from './CamPage.module.css'
import { HOST_IP } from '../var'
// import Cam from './controls/Cam'

class CamPage extends React.Component {
  constructor(props) {
    super(props)
    this.player = null
    this.canvas = React.createRef()
  }
  componentDidMount() {
    this.player || new window.JSMpeg.Player(`ws://${HOST_IP}:9999`, {
      canvas: this.canvas.current // Canvas should be a canvas DOM element
    })
    if (this.player) this.player.play()
  }

  componentWillUnmount() {
    if (this.player) this.player.stop()
  }

  render() {
    return (
      <div className={style.cam} >
        <canvas ref={this.canvas}></canvas>
      </div>
    );
  }
}

export default CamPage;