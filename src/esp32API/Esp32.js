function Esp32() {
  this.socket = null

  this.connect = () => {
    this.socket = new WebSocket('ws://192.168.1.200/ws')

    this.socket.onopen = function (e) {
      console.log("Соединение установлено")
    }

    this.socket.onmessage = function (event) {
      console.log(`[message] Данные получены с сервера: ${event.data}`)
    }

    this.socket.onclose = function (event) {
      if (event.wasClean) {
        console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`)
      } else {
        console.log('[close] Соединение прервано')
      }
    }

    this.socket.onerror = function (error) {
      console.log(`[error] ${error.message}`)
    }
  }

  this.getPackage = ({ channel, level }) => {
    const packageLeft = channel << 8
    const packageAll = packageLeft | level
    return packageAll
  }
}

export default Esp32