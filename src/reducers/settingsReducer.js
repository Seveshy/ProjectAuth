import{settingsActions} from '../util/constant'

const INITIAL_STATE = {
  table_settings : [],
  countRegister:0
};

const settingsReducer = (state = INITIAL_STATE, action) => {
  console.log("REDUCEr "+ JSON.stringify(action.type))
    switch (action.type) {
      case settingsActions.UPDATE_TABLE:
        return {...state, table_settings:action.value};    
      case settingsActions.UPDATE_COUNT_REGISTER:
        return {...state, countRegister:action.value};   
     
      default:
        return state;
    }
};

 export{settingsReducer};