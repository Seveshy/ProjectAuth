import { settingsActions } from "../util/constant";
import { listTableJson } from "../services/table_json";


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

export function loadTables(dispatch) {
  const setTable = (newList) => dispatch(actions.updateTable(newList));
  setTable(listTableJson);
}
export  function insertTables(dispatch) {
  //this function must to update tables too
  // try {
  //   const response = await api.post("rest/atualiza", {
  //     listaTabela
  //   });
  //   login(response.retorno)
  //   history.push("/config");
  // } catch (response) {
  //   throw new Error("Usuario ou senha incorreto " );
  // }



}
export function loadQuantityRecords(dispatch) {
  
}
export function insertQuantityRecords(dispatch) {
  
}