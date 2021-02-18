import store from '../store'
import {SET_CONNECTION_STATE} from '../var'

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

  this.connect = () => {
    this.socket = new WebSocket(`ws://${ip}/ws`)

    this.socket.onopen = (e) => {
      console.log("Соединение установлено")
      this.changeState(true)
    }

    this.socket.onmessage = (event) => {
      console.log(`[message] Данные получены с сервера: ${event.data}`)
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
}

const smartController = new Esp32(IP)
smartController.connect()

export default smartController

