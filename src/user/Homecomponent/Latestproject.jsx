import React, { useEffect, useState } from "react";
import "./CSS/Procard.css";
import Procard from "./Procard";
import Heading from "./Heading";
import Seemore from "./Seemore";
import axios from "axios";
import { REACT_URL } from "../../constants/ReactUrl";

const Latestproject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get(`${REACT_URL}/projects/latestProjects`);
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
      <div className="latestProjectSection py-5">
        <Heading
          title="Our Latest Projects"
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

export default Latestproject;
