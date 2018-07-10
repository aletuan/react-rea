import { combineReducers } from 'redux'
import ResultsReducer from './ResultsReducer';
import SavedReducer from './SavedReducer';

export default combineReducers({
   results: ResultsReducer,
   saved: SavedReducer
});