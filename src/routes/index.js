import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
import PrivateRoute from "./privateRoutes";
import Relatorio from "../pages/Relatorio"
import { isAuthenticated } from "../services/auth";

const Routes = () => {
  const history = useHistory();
  
  if (
    (history.location.pathname == "/login" ||
      history.location.pathname == "/") &&

    isAuthenticated()
  ) {
    history.push("config");
  }

  return (
    <BrowserRouter basename="skytefhub">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />

        <Route path="/config" component={() => <Settings />} />
        <Route path="/relatorio" component={() => <Relatorio />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
