import "../css/Sidebar.css";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <h2 className="text-white">LOGO</h2>

      <Accordion defaultActiveKey="0" className="my-4">
        <Accordion.Item eventKey="0" className="mb-3">
          <Accordion.Header>Projects</Accordion.Header>
          <Accordion.Body className="text-black admin-link">
            <NavLink to={"/admin/create-project"}>Create Project</NavLink>
          </Accordion.Body>
          <Accordion.Body className="text-black admin-link">
            <NavLink to={"/admin/edit-project"}>Edit Project</NavLink>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="mb-3">
          <Accordion.Header>Board Members</Accordion.Header>
          <Accordion.Body className="text-black admin-link">
            <NavLink to={"/admin/create-boardmember"}>
              Create Board Member
            </NavLink>
          </Accordion.Body>
          <Accordion.Body className="text-black admin-link">
            <NavLink to={"/admin/edit-boardmember"}>Edit Board Member</NavLink>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="mb-3">
          <Accordion.Header>Members</Accordion.Header>
          <Accordion.Body className="text-black admin-link">
            <NavLink to={"/admin/create-member"}>Create Members</NavLink>
          </Accordion.Body>
          <Accordion.Body className="text-black admin-link">
            <NavLink to={"/admin/edit-member"}>Edit Members</NavLink>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="mb-3">
          <Accordion.Header>Past Presidents</Accordion.Header>
          <Accordion.Body className="text-black admin-link">
            <NavLink to={"/admin/create-past-president"}>
              Create Past President
            </NavLink>
          </Accordion.Body>
          <Accordion.Body className="text-black admin-link">
            <NavLink to={"/admin/edit-past-president"}>
              Edit Past President
            </NavLink>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="mb-3">
          <Accordion.Header>Leader's Messages</Accordion.Header>
          <Accordion.Body className="text-black admin-link">
            <NavLink to={"/admin/create-leader-message"}>
              Create Leader's Message
            </NavLink>
          </Accordion.Body>
          <Accordion.Body className="text-black admin-link">
            <NavLink to={"/admin/edit-leader-message"}>
              Edit Leader's Message
            </NavLink>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Sidebar;
