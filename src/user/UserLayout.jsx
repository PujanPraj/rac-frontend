import React from "react";
import Navbar from "./Homecomponent/Navbar";
import Footer from "./Homecomponent/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
