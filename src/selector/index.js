const selectors = {
  getTableSettings: state => state.settingsReducer.table_settings,
  getCountRegisterSettings: state => state.settingsReducer.countRegister,
};
export { selectors };
