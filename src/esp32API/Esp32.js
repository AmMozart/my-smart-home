function Esp32() {
  this.socket = null

  this.connect = () => {
    this.socket = new WebSocket('ws://192.168.1.117/ws')
    // this.socket = new WebSocket('wss://javascript.info/article/websocket/chat/ws')

    this.socket.onopen = function (e) {
      console.log("Соединение установлено")
      // alert("Соединение установлено")
    }

    this.socket.onmessage = function (event) {
      console.log(`[message] Данные получены с сервера: ${event.data}`)
      // alert(`[message] Данные получены с сервера: ${event.data}`)
    }

    this.socket.onclose = function (event) {
      // alert("Соединение закрыто")
      if (event.wasClean) {
        console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`)
      } else {
        console.log('[close] Соединение прервано')
      }
    }

    this.socket.onerror = function (error) {
      console.log(`[error] ${error.message}`)
      // alert(`[error] ${error.message}`)
    }
  }

  this.getPackage = ({ channel, level }) => {
    return channel << 8 | level
  }
}

export default Esp32