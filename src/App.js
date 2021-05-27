import Routes from "../src/routes";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { store } from "./store";
import { Provider } from "react-redux";
function App() {
  return (

    
    <>
      <Provider store={store}>
        <GlobalStyles />
        <BrowserRouter>
      <Switch>
        <Route path="/"  component={Routes } />
        <Redirect to="/skytefhub" />
      </Switch>
      
    </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
