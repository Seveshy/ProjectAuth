import { settingsActions } from "../util/constant";
import { listTableJson } from "../services/table_json";

import api from"../services/api"


export const actions = {
  updateTable: (value) => ({
    value: value,
    type: settingsActions.UPDATE_TABLE,
  }),
  updateCountRegister: (value) => ({
    value: value,
    type: settingsActions.UPDATE_COUNT_REGISTER,
  }),
};

export async function loadTables(dispatch) {
  const setTable = (newList) => dispatch(actions.updateTable(newList));


  try {
      const response = await api.get("configuracao/retona-dados");
      console.log("lista retorno ", JSON.stringify(response))
      debugger
      setTable(response.data)
      return response.data;

    } catch (response) {
      throw new Error("ERRO" );
    }
}
export async function updateSingleTable(dispatch, lista, url) {
  //this function must to update tables too
  try {
    const response = await api.put("configuracao"+url, {
      lista
    });

    loadTables(dispatch);
  
  } catch (response) {
    throw new Error("ERRO" );
  }



}
export function loadQuantityRecords(dispatch) {
  
}
export function insertQuantityRecords(dispatch) {
  
}