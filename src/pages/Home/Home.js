import React from "react";
import AdminLayout from "../../layouts/admin";
import "./Home.css";

import ProfileProvider from "../../context/ProfileContext";

const Home = props => {
  return (
    <ProfileProvider>
      <AdminLayout>
        <h1>Hola Ivan</h1>
      </AdminLayout>
    </ProfileProvider>
  );
};

export default Home;
