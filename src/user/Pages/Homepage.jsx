import React from "react";
import Carousel from "../Homecomponent/Carousel";
import Objective from "../Homecomponent/Objective";
import Project from "../Homecomponent/Project";
import President from "../Homecomponent/President";
import Achievement from "../Homecomponent/Achievement";
import Latestproject from "../Homecomponent/Latestproject";
import Leader from "../Homecomponent/Leader";

const App = () => {
  return (
    <>
      <Carousel />
      <Objective />
      <Project />
      <President />
      <Achievement />
      <Leader />
      <Latestproject />
    </>
  );
};

export default App;
