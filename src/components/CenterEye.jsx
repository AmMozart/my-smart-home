import React from 'react'
import style from './CenterEye.module.css'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { HOST_IP } from '../var'

export default function CenterEye() {
  const history = useHistory()
  const [player, setPlayer] = useState(null)
  let canvas = React.createRef()

  useEffect(() => {
    player || (setPlayer(new window.JSMpeg.Player(`ws://${HOST_IP}:9998`, {
      canvas: canvas.current, // Canvas should be a canvas DOM element
    })))
    if (player) player.play()
    return function () {
      if (player) player.stop()
    }
  }, [canvas, player])

  return (
    <div className={style['cssload-container']}
      onClick={() => {
        history.push('/Cam')
      }
      }>

      <canvas id="canvas" ref={canvas}></canvas>

      <div className={style['cssload-whirlpool']}></div>
    </div>
  )
}