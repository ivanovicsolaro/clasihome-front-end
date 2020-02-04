import React, { createContext, useState, useEffect } from "react";
import { Auth } from "aws-amplify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, userHasAuthenticated] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e === "No current user") {
        userHasAuthenticated(false);
      }
    }
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
