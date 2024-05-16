import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./user/Homecomponent/Navbar";
import Home from "./user/Pages/Homepage";
import About from "./user/Pages/Aboutpage";
import Mission from "./user/Pages/Missionpage";
import Pastpresident from "./user/Pages/Pastpresidentpage";
import Team from "./user/Pages/Teampage";
import Project from "./user/Pages/Projectpage";
import Gallery from "./user/Pages/Gallerypage";
import Contact from "./user/Pages/Contactpage";
import Login from "./user/Pages/Loginpage";
import Dashboard from "./admin/pages/Dashboard";
import UserLayout from "./user/UserLayout";
import AdminLayout from "./admin/AdminLayout";
import CreateProject from "./admin/pages/CreateProject";
import ProjectTable from "./admin/pages/ProjectTable";
import EditProject from "./admin/pages/EditProject";
import CreateBM from "./admin/pages/boardmember/CreateBM";
import TableBM from "./admin/pages/boardmember/TableBM";
import EditBM from "./admin/pages/boardmember/EditBM";
import CreateMember from "./admin/pages/members/CreateMember";
import TableMembers from "./admin/pages/members/TableMembers";
import EditMember from "./admin/pages/members/EditMember";
import CreateLeader from "./admin/pages/leader/CreateLeader";
import TableLeader from "./admin/pages/leader/LeaderTable";
import EditLeader from "./admin/pages/leader/EditLeader";
import CreatePastPresident from "./admin/pages/PastPresident/CreatePastPresident";
import TablePastPresident from "./admin/pages/PastPresident/TablePastPresident";
import EditPastPresident from "./admin/pages/PastPresident/EditPastPresident";

const MainApp = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="mission" element={<Mission />} />
          <Route exact path="team" element={<Team />} />
          <Route exact path="pastpresident" element={<Pastpresident />} />
          <Route exact path="project" element={<Project />} />
          <Route exact path="gallery" element={<Gallery />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="login" element={<Login />} />
        </Route>

        <Route path="/admin/" element={<AdminLayout />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route exact path="create-project" element={<CreateProject />} />
          <Route exact path="edit-project" element={<ProjectTable />} />
          <Route exact path="edit-project/:id" element={<EditProject />} />
          <Route exact path="create-boardmember" element={<CreateBM />} />
          <Route exact path="edit-boardmember" element={<TableBM />} />
          <Route exact path="edit-boardmember/:id" element={<EditBM />} />
          <Route exact path="create-member" element={<CreateMember />} />
          <Route exact path="edit-member" element={<TableMembers />} />
          <Route exact path="edit-member/:id" element={<EditMember />} />
          <Route
            exact
            path="create-leader-message"
            element={<CreateLeader />}
          />
          <Route exact path="edit-leader-message" element={<TableLeader />} />
          <Route
            exact
            path="edit-leader-message/:id"
            element={<EditLeader />}
          />
          <Route
            exact
            path="create-past-president"
            element={<CreatePastPresident />}
          />
          <Route
            exact
            path="edit-past-president"
            element={<TablePastPresident />}
          />
          <Route
            exact
            path="edit-past-president/:id"
            element={<EditPastPresident />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default MainApp;
