import "./css/AdminLayout.css";
import React from "react";
import { Outlet } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./components/Sidebar";
import AdminNavbar from "./components/Navbar";

const AdminLayout = () => {
  return (
    <Row className="adminLayout">
      <Col md="3" className=" py-2 px-4">
        <Sidebar />
      </Col>
      <Col md="9" className="bg-white">
        <AdminNavbar />
        <Outlet />
      </Col>
    </Row>
  );
};

export default AdminLayout;
