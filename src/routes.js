// packages
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layout
import MainLayout from "./layout/MainLayout";

// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Navigate to="/home" /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
      ],
    },
    // { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

export default Router;
