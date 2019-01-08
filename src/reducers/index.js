import { combineReducers } from 'redux'
import { houseReducer } from './houseReducer'
import { hasErrorReducer } from './hasErrorReducer.js';
import { isLoadingReducer } from './isLoadingReducer'

const rootReducer = combineReducers({
 house: houseReducer,
 isLoading: isLoadingReducer,
 error: hasErrorReducer,
})

export default rootReducer