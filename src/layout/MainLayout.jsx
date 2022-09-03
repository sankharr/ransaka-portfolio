// packages
import React from "react";
import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import NavbarNew from "../components/navbar/NavbarNew";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      {/* <NavbarNew /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
