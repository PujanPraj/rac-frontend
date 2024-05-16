import React from "react";
import { NavLink } from "react-router-dom";

const Seemore = (props) => {
  return (
    <>
      <div className="text-center my-3">
        <NavLink to={props.to} className="seeMore">
          See more
        </NavLink>
      </div>
    </>
  );
};

export default Seemore;
