import React from "react";
import Heading from "../Homecomponent/Heading";

const Mission = () => {
  return (
    <>
      <div className="pageHeader py-4">
        <Heading title="Our Mission/Vision" />
      </div>
      <div className="container py-5">
        <div className="missionSection mb-5">
          <h2 className="text-white">Mission</h2>
          <p style={{ textAlign: "justify", color: "white" }}>
            The mission of Rotaract Club of Madhyapur is to provide an
            opportunity for young men and women to enrich their knowledge and
            skills that will assist them in personal and professional
            development, to address the needs of our communities, enhancing
            better relations with people worldwide, marching learning and fun
            together.
          </p>
        </div>
        <div className="visionSection">
          <h2 className="text-white">Vision</h2>
          <p style={{ textAlign: "justify", color: "white" }}>
            Rotaract Club of Madhyapur is chartered to work in the field of
            education, sexual and reproductive health, culture promotion through
            fellowship with Rotary-Rotaract fraternity worldwide, establishing
            goodwill by creating professional leaders to serve the community.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
