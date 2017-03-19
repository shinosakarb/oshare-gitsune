import { handleActions } from 'redux-actions'
const rootReducer = handleActions({
  SUCCESS: (state, action) => Object.assign({}, state, {data: action.payload}),
  FAILURE: (state, action) => Object.assign({}, state, {data: action.payload})
}, {data: {people:{}}})
export default rootReducer
