import { GET_DATE } from '../var'
import { SET_CONNECTION_STATE } from '../var'

const initialState = {
  dateTime: new Date().toLocaleTimeString(),
  type: 'ok',
  isConnect: false
}

let headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATE: { return state }
    case SET_CONNECTION_STATE: {return {...state, isConnect: action.data.value}}
    default: { return state }
  }
}

export default headerReducer