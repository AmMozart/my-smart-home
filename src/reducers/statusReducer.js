import { SET_TOGGLE_VALUE } from '../var'
import smartController from '../smartController/smartController'

const initialState = {
  '0-01L': true,
  '0-02L': false,
  '0-03L': false,
  '0-04L': true,
  '0-05L': true,
}

let statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOGGLE_VALUE: {
      try {
        if (smartController.isConnect) smartController.socket.send(smartController.getPackage({
          channel: +(action.data.name[3]),
          level: action.data.value ? 255 : 0
        }))
      }
      catch (e) {
        console.error(e.message)
      }
      return { ...state, [action.data.name]: action.data.value }
    }
    default: { return state }
  }
}

export default statusReducer