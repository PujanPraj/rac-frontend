import React, { useEffect, useState } from "react";
import Heading from "../Homecomponent/Heading";
import Team from "../Homecomponent/Team";
import axios from "axios";
import { REACT_URL } from "../../constants/ReactUrl";

const Teampage = () => {
  const [BM, setBM] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchBM = async () => {
      const response = await axios.get(`${REACT_URL}/boardMembers`);
      if (response.data.success) {
        setBM(response.data.data);
      } else {
        console.log(response.data.message);
      }
    };
    fetchBM();
  }, []);

  useEffect(() => {
    const fetchBM = async () => {
      const response = await axios.get(`${REACT_URL}/members`);
      if (response.data.success) {
        setMembers(response.data.data);
      } else {
        console.log(response.data.message);
      }
    };
    fetchBM();
  }, []);

  return (
    <>
      <div className="pageHeader py-4">
        <Heading title="Board Members" />
      </div>
      <div className="container mt-4">
        <Team items={BM} />
      </div>
      <div className=" pt-5 pb-3">
        <Heading title="Members" />
      </div>
      <div className="container pb-5">
        <Team items={members} />
      </div>
    </>
  );
};

export default Teampage;
