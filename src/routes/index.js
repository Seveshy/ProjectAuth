import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Settings from "../pages/Settings";
import PrivateRoute from "./privateRoutes";



const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={() => <Login/>} />
        <PrivateRoute path="/config" component={() => <Settings/>}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
