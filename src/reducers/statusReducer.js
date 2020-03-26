import { SET_TOGGLE_VALUE } from '../var'

const initialState = {
  '0-01L': true,
  '0-02L': false,
  '0-03L': false,
  '0-04L': true,
}

let statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOGGLE_VALUE: {

      return { ...state, [action.data.name]: action.data.value }
    }
    default: { return state }
  }
}

export default statusReducer