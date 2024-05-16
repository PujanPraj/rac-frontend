import React from "react";
import Heading from "../Homecomponent/Heading";

const About = () => {
  return (
    <>
      <div className="pageHeader py-4">
        <Heading title="About Us" />
      </div>
      <div className="container py-5">
        <img src="" alt="" />
        <p style={{ textAlign: "justify", color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vel orci efficitur, luctus justo nec, euismod eros. Fusce molestie
          molestie turpis, vitae lacinia mi lacinia vel. Proin mauris purus,
          porta non lectus in, laoreet ultrices nisi. Morbi faucibus, nulla ut
          ornare pretium, elit neque lobortis augue, ac maximus urna magna a
          velit. Suspendisse sit amet orci quis ipsum sagittis condimentum.
          Fusce porta metus turpis. Ut volutpat nisl sed nulla laoreet euismod.
        </p>
      </div>
    </>
  );
};

export default About;
