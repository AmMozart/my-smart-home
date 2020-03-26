import { GET_DATE } from '../var'

const initialState = {
  dateTime: new Date().toLocaleTimeString(),
  type: 'ok',
}

let headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATE: { return state }
    default: { return state }
  }
}

export default headerReducer