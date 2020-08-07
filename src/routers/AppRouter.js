import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { AuthContext } from "../auth/AuthContext";

export const AppRouter = () => {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <PrivateRoute path="/" isAuthenticated={user.logged} component={DashBoardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};
