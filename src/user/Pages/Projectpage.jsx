import React, { useEffect, useState } from "react";
import Heading from "../Homecomponent/Heading";
import Procard from "../Homecomponent/Procard";
import axios from "axios";
import { REACT_URL } from "../../constants/ReactUrl";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get(`${REACT_URL}/projects`);
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
      <div className="pageHeader py-4">
        <Heading title="Our Projects" />
      </div>
      <div className="container py-5">
        <Procard items={projects} />
      </div>
    </>
  );
};

export default Project;
