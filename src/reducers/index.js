import { combineReducers } from 'redux';
import IcoReducer from './reducer_icos';

const rootReducer = combineReducers({
 icos: IcoReducer
});

export default rootReducer;
