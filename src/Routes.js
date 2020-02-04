import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
/**Components */

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";

const Routes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Switch>
      {isAuthenticated ? (
        <Route path="/" exact component={Home} />
      ) : (
        <Route component={Login} />
      )}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
