import React from "react";

/** Routes */
import Routes from "./Routes";

import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes />
      </div>
    </AuthProvider>
  );
}

export default App;
