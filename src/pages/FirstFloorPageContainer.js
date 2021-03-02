import {connect} from 'react-redux'
import FirstFloorPage from './FirstFloorPage'
import {SET_TOGGLE_VALUE} from '../var'

const mapStateToProps = (state) => {
    return {
        statusReducer: state.statusReducer
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        changeValue: (e) => dispatch({
          type: SET_TOGGLE_VALUE,
          data: {
            name: e.target.name,
            value: e.target.checked
          }
        })
    }
}

const FirstFloorPageContainer = connect(mapStateToProps, mapDispatchToProps)(FirstFloorPage)

export default FirstFloorPageContainer