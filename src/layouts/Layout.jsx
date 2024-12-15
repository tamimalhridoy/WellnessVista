import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Fooder from "../components/Fooder";
import DarkLight from "../mode/DarkLight";

const Layout = () => {
  return (
    <DarkLight>
      <div>
        <Navbar />
        <Outlet />
        <Fooder />
      </div>
    </DarkLight>
  );
};

export default Layout;
