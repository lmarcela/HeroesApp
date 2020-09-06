import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/HeroesApp/login"
            isAuthenticated={user.logged}
            component={LoginScreen}
          />
          <PrivateRoute
            path="/"
            isAuthenticated={user.logged}
            component={DashBoardRoutes}
          />
        </Switch>
      </div>
    </Router>
  );
};
