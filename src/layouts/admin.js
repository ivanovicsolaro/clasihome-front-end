import React, { Fragment, useContext } from "react";
import Navbar from "../components/Navbar";
import "./admin.css";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";

const AdminLayout = ({ children, history }) => {
  const { isAuthenticated, userHasAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    <Fragment>
      <header className="app-header">
        <Navbar />
      </header>

      <div>{children}</div>
      <h1> panel admin</h1>
    </Fragment>
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: {
          menssage: "Debes loguearte para acceder a tu perfil"
        }
      }}
    />
  );
  /*
  if (!isAuthenticated) {
    return history.push("/login");
  } else {
    return (
      <Fragment>
        <header className="app-header">
          <Navbar />
        </header>

        <div>{children}</div>
        <h1> panel admin</h1>
      </Fragment>
    );
  }*/
};
export default AdminLayout;
