// packages
import React from "react";
import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
