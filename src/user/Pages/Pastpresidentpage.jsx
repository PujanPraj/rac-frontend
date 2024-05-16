import React, { useEffect, useState } from "react";
import Heading from "../Homecomponent/Heading";
import Team from "../Homecomponent/Team";
import axios from "axios";
import { REACT_URL } from "../../constants/ReactUrl";

const Pastpresident = () => {
  const [PP, setPP] = useState([]);

  useEffect(() => {
    const fetchPP = async () => {
      const response = await axios.get(`${REACT_URL}/pastpresidents`);
      if (response.data.success) {
        setPP(response.data.data);
      } else {
        console.log(response.data.message);
      }
    };
    fetchPP();
  }, []);

  return (
    <>
      <div className="pageHeader py-4">
        <Heading title="Past Presidents" />
      </div>
      <div className="container mt-4 pb-5">
        <Team items={PP} />
      </div>
    </>
  );
};

export default Pastpresident;
