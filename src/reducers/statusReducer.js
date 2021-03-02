import { SET_TOGGLE_VALUE, INIT_STATE_FROM_CONTROLLER, SET_DMX_LEVEL} from '../var'
import smartController from '../smartController/smartController'

const initialState = {
  'dmxChannels': Array(512).fill(0)
}

let statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_STATE_FROM_CONTROLLER: {
      return {...state, dmxChannels: action.data}
    } 
    case SET_DMX_LEVEL: {
      const newDmxChannels = state.dmxChannels
      newDmxChannels[action.data.index] = action.data.value
      console.log(action.data)
      return {...state, dmxChannels: newDmxChannels}
    } 
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