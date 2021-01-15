import {combineReducers} from 'redux';

import {settingsReducer} from './settingsReducer'

const reducers = combineReducers({
  settingsReducer : settingsReducer,
 

})

export default reducers;