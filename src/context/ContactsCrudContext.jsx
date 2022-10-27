import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const contactCrudContext = createContext();

export const ContactsCrudContextProvider = ({ children }) => {
  const userList =
    localStorage.getItem("userlist") &&
    JSON.parse(localStorage.getItem("userlist"));

  const userDetails =
    localStorage.getItem("userInfo") &&
    JSON.parse(localStorage.getItem("userInfo"));

  const [userData, setUserData] = useState(userList || []);
  const [toggleAuth, setToggleAuth] = useState(true);
  const [userInfo, setUserInfo] = useState();

  const toggeleAuthHandler = () => {
    setToggleAuth(!toggleAuth);
  };

  const authSubmission = (type, data) => {
    if (type === "login") {
      localStorage.setItem("userInfo", data);
      setUserInfo(data && JSON.parse(data));
    } else {
      setUserData(data);
      localStorage.setItem("userlist", JSON.stringify(data));
    }
  };

  useEffect(() => {
    setUserInfo(userDetails);
  }, []);

  const value = {
    toggeleAuthHandler,
    toggleAuth,
    userData,
    authSubmission,
    userInfo,
  };

  return (
    <contactCrudContext.Provider value={value}>
      {children}
    </contactCrudContext.Provider>
  );
};

export function useContextCrud() {
  return useContext(contactCrudContext);
}
