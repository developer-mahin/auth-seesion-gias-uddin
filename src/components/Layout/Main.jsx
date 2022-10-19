import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export const UserContext = createContext();

const Main = () => {
  const [user, setUser] = useState("");
  const contextInfo = { user, setUser };

  return (
    <div>
      <UserContext.Provider value={contextInfo}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </UserContext.Provider>
    </div>
  );
};

export default Main;
