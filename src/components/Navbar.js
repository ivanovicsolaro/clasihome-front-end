import React, { useContext } from "react";

import { Link, withRouter } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { ProfileContext } from "../context/ProfileContext";

import { Auth } from "aws-amplify";
import styled from "@emotion/styled";

const ContainerNav = styled.nav`
  width: 100%;
  padding: 10px;
  background-color: red;
  display: inline;
`;

const NavLeft = styled.div`
  float: left;
  width: 10%;
`;

const NavRight = styled.div`
  float: right;
  width: 20%;
`;

const LogOutLink = styled.div`
  color: #000;
`;

const Navbar = props => {
  const { isAuthenticated, userHasAuthenticated } = useContext(AuthContext);
  const { userProfile } = useContext(ProfileContext);

  async function handleLogOut() {
    await Auth.signOut();
    userHasAuthenticated(false);
    props.history.push("/login");
  }

  return (
    <ContainerNav>
      <NavLeft>
        <Link to="/">Inicio</Link>
      </NavLeft>
      <NavRight>
        {isAuthenticated ? (
          <div>
            <h5>Hola {userProfile.name} </h5>{" "}
            <img src={userProfile.avatar} alt="" />
            <LogOutLink onClick={() => handleLogOut()}>Logout</LogOutLink>
          </div>
        ) : (
          <div>
            <Link to="/singup">Singup</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </NavRight>
    </ContainerNav>
  );
};

export default withRouter(Navbar);
