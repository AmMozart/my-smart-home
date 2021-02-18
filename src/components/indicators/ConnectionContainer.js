import { connect } from 'react-redux'
import Connection from './Connection'

let mapStateToProps = (state) => {
  return {
    isConnect: state.headerReducer.isConnect
  }
}

let ConnectionContainer = connect(mapStateToProps)(Connection);

export default ConnectionContainer