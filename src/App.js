import Routes from "../src/routes";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Modal from 'react-modal';

import { ToastContainer } from 'react-toastify'

import { store } from "./store";
import { Provider } from "react-redux";

Modal.setAppElement("#root");

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
      <ToastContainer />
    </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
