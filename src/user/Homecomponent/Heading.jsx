import React from "react";

const Heading = (props) => {
  return (
    <>
      <div className="container text-center">
        <div className="heading mb-5">
          <h2 className="tekoHeading">{props.title}</h2>
        </div>
        {/* <p className=" py-4 px-3">{props.para}</p> */}
      </div>
    </>
  );
};

export default Heading;
