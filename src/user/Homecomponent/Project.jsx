import React, { useEffect, useState } from "react";
import "./CSS/Procard.css";
import Projectlist from "../List/Projectlist";
import Procard from "./Procard";
import Heading from "./Heading";
import Seemore from "./Seemore";
import axios from "axios";
import { REACT_URL } from "../../constants/ReactUrl";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get(`${REACT_URL}/projects/randomProjects`);
      if (response.data.success) {
        setProjects(response.data.data);
      } else {
        console.log(response.data.message);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div className="projectSection py-5">
        <Heading
          title="Our Projects"
          para="We are here to make your website look more elegant and stylish!"
        />

        <div className="container">
          <Procard items={projects} />
          <Seemore to="/project" />
        </div>
      </div>
    </>
  );
};

export default Project;
