import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, path, isPrivate, ...props }) => {
  return (
    <Route
      path={path}
      render={(props) =>
        isPrivate && !Boolean(userDetails) ? (
          <Redirect to={{ pathname: "/login" }} />
        ) : (
          <Component {...props} />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
