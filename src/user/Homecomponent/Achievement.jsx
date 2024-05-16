import React from "react";
import Modal from "./Modal";
import "./CSS/Achievement.css";

const TotalMembers = "89";
const TotalProjects = "459";

const Achievement = () => {
  return (
    <>
      <div className="achievementSection py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-5 achieve">
              <div className="row">
                <div className="col-6 col-md-6 col-lg-6 ">
                  <h2>{TotalMembers}</h2>
                  <span>Total Members</span>
                </div>
                <div className="col-6 col-md-6 col-lg-6 ">
                  <h2>{TotalProjects}</h2>
                  <span>Total Projects</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2 col-lg-1 clubLogo">
              <img className="miniLogo" src="./Logo/minilogo.png" alt="" />
            </div>
            <div className="col-12 col-md-12 col-lg-6 joinUs">
              <div className="joinUs d-flex align-items-center justify-content-end gap-5">
                <div>
                  <h3>Join Our Club</h3>
                  <span>Welcome to our club as a new member</span>
                </div>
                <div>
                  <Modal />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievement;
