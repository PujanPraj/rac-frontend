import "../css/Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="adminNavbar">
      <NavLink to="/" className="adminNavbar-link">
        GO TO HOME
      </NavLink>
    </div>
  );
};

export default AdminNavbar;
