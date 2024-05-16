import React from "react";
import "../Homecomponent/CSS/Pastpresidentpage.css";

const Presidentpage = (props) => {
  return (
    <>
      <div className="Pastpresidentpage">
        <div className="row">
          {props.items.map((val) => {
            return (
              <div className="col-12 col-md-6 col-lg-3 ">
                <div data-aos={val.aos}>
                  <div className="card">
                    <img src={val.image} alt={val.name} />
                    <div className="card-text">
                      <h5>{val.name}</h5>
                      <h6>{val.post}</h6>
                      <h6>{val.year}</h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Presidentpage;
