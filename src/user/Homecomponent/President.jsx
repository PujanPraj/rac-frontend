import React, { useEffect, useState } from "react";
import "./CSS/President.css";
import axios from "axios";
import { REACT_URL } from "../../constants/ReactUrl";

const color = "#A61151";

const President = () => {
  const [president, setPresident] = useState(null);
  const [pName, setPName] = useState(null);

  useEffect(() => {
    const fetchPresident = async () => {
      const response = await axios.get(
        `${REACT_URL}/boardMembers/getPresident`
      );
      if (response.data.success) {
        setPresident(response.data.data.image);
        setPName(response.data.data.name);
      } else {
        console.log(response.data.message);
      }
    };
    fetchPresident();
  }, []);

  return (
    <>
      <div className="presidentSection py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-lg-3">
              <h2 style={{ color, fontSize: "80px" }} className="tekoHeading">
                Meet Our Club Leader
              </h2>
            </div>

            <div className="col-12 col-md-12 col-lg-9">
              <div className="images d-flex gap-3 justify-content-end">
                <div className="imageItems">
                  <img src={president} alt="" />
                  <div className="text">
                    <h5>{pName}</h5>
                    <h6>President</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default President;
