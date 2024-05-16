import React from "react";

const Procard = (props) => {
  return (
    <>
      <div className="row">
        {props.items.map((val) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 ">
              <div data-aos={val.aos}>
                <div
                  class="card proCard"
                  style={{ Width: "18rem" }}
                  key={val.id}
                >
                  <div className="proImg">
                    <img
                      src={val.img}
                      class="card-img-top"
                      style={{ Width: "354px", height: "265.5px" }}
                      alt={val.title}
                    />
                  </div>
                  <div class="card-body">
                    <h6 className="proCardDate roboto">{val.date}</h6>
                    <h5 class="card-text mt-3 teko">{val.title}</h5>
                    <p>{val.para}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Procard;
