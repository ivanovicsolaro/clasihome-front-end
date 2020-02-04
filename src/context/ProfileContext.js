import React, { useState, useEffect, createContext } from "react";
import { Auth, API } from "aws-amplify";

import { getPokemon, getProfileByUser } from "../services/ProfileService";

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    user_id: "",
    name: "",
    lastname: "",
    avatar: "",
    office_id: "",
    role_id: ""
  });

  useEffect(() => {
    getUserId().then(res => {
      setUserProfile({
        ...userProfile,
        name: res.name,
        user_id: res.id,
        avatar: res.avatar
      });
    });
  });

  async function getUserId() {
    const dataCognito = await Auth.currentSession();
    const dataUser = await getProfileByUser(25);
    return {
      name: dataUser.name,
      id: dataCognito.idToken.payload.sub,
      avatar: dataUser.sprites.front_default
    };
  }

  return (
    <ProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
