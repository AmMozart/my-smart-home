import store from '../store'
import {SET_CONNECTION_STATE, INIT_STATE_FROM_CONTROLLER, SET_DMX_LEVEL} from '../var'

const IP = '192.168.1.200'

function Esp32(ip = IP) {
  this.isConnect = false

  this.changeState = (connectionState) => {
    this.isConnect = connectionState
    store.dispatch({
      type: SET_CONNECTION_STATE,
      data: {
        name : 'isConnect',
        value: this.isConnect
      }
    })
  }

  this.init = (dmxStateArray) => {
    store.dispatch({
      type: INIT_STATE_FROM_CONTROLLER,
      data: dmxStateArray
    })
  }

  this.setDmxLevel = (newData) => {
    store.dispatch({
      type: SET_DMX_LEVEL,
      data: newData
    })
  }

  this.connect = () => {
    this.socket = new WebSocket(`ws://${ip}/ws`)
    
    this.socket.onopen = (e) => {
      console.log("Соединение установлено")
      this.socket.send('GET_STATE')
      this.changeState(true)
    }

    this.socket.onmessage = (event) => {
      switch(event.data.constructor.name) {
        case 'Blob': {
          event.data.arrayBuffer().then(buffer => this.init(new Uint8Array(buffer)));
          break
        }
        case 'String': {
          this.setDmxLevel(this.parsePackage(event.data))
          break
        }
        default:
          throw new Error(`===${event.data.constructor.name}=== type of message receive is not handle`)
      }
    }

    this.socket.onclose = (event) => {
      if (event.wasClean) {
        console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`)
      } else {
        console.log(`[close] Соединение прервано, код=${event.code} причина=${event.reason}`)
      }
      this.changeState(false)
      this.connect()
    }
    this.socket.onerror = (error) => {
      console.log(`[error] ${error.message}`)
      this.changeState(false)
    }
  }

  this.getPackage = ({ channel, level }) => {
    const packageLeft = channel << 8
    const packageAll = packageLeft | level
    return packageAll
  }

  this.parsePackage = (x) => {
    const mask = 0b11111111
    const value = x & mask
    const index = x >> 8
    return {index, value}
  }
}

const smartController = new Esp32(IP)
smartController.connect()

export default smartController

