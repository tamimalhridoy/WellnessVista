import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Fooder from "../components/Fooder";
import DarkLight from "../mode/DarkLight";

const Layout = () => {
  return (
    <>
      <DarkLight>
        <Navbar />
        <Outlet />
        <Fooder />
      </DarkLight>
    </>
  );
};

export default Layout;
