import React from "react";
import "./CSS/Objective.css";
import Objlist from "../List/Objlist";
import Heading from "./Heading";

const color = "#a61151";

const Objective = () => {
  return (
    <>
      <div className="objSection py-5">
        <Heading
          title="Our Objectives"
          para="We are here to make your website look more elegant and stylish!"
        />

        <div className="container">
          <div className="row">
            {Objlist.map((val) => {
              return (
                <div className="col-12 col-md-12 col-lg-6 ">
                  <div data-aos={val.aos}>
                    <div
                      class="card objCard mb-3 py-2"
                      style={{ maxWidth: "620px" }}
                      key={val.id}
                    >
                      <div class="row g-0">
                        <div class="col-md-4 d-flex align-self-center justify-content-center">
                          <i className={val.img} style={{ color }}></i>
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <h5 class="card-title teko">{val.title}</h5>
                            <p class="card-text ">{val.para}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Objective;
