import { combineReducers } from 'redux';

// import all reducers here
import clothesReducer from './clothesReducer';


// combine reducers
const reducers = combineReducers({
   // if we had other reducers, they would go here
   clothes: clothesReducer,
});

// make the combined reducers available for import
export default reducers;