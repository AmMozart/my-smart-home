import { createStore } from 'redux'
import reducers from './reducers/reducers'

let store = createStore(reducers)

store.subscribe(() => {
  console.log(store.getState())
})

export default store