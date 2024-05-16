import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import "./CSS/Leader.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import OwlCarousel from "react-owl-carousel";
import { REACT_URL } from "../../constants/ReactUrl";
import axios from "axios";

const Leader = () => {
  const [leader, setLeader] = useState([]);

  useEffect(() => {
    const fetchLeader = async () => {
      try {
        const response = await axios.get(`${REACT_URL}/leaders`);
        if (response.data.success) {
          setLeader(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchLeader();
  }, []);

  const options = {
    items: "4",
    // nav: "true",
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <>
      <div className="leaderSection py-5">
        <div className="container">
          <Heading title="Message From Leaders" />

          <div className="leaderCarousel">
            <OwlCarousel className="owl-theme " loop autoplay {...options}>
              {leader.map((val) => {
                return (
                  <>
                    <div className="item">
                      <div class="card mb-3">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src={val.img} class="img-fluid " alt="..." />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">{val.name}</h5>
                              <h6 class="card-text">{val.post}</h6>
                              <p class="card-text">
                                {val.msg1} <br /> {val.msg2}
                              </p>
                              <p class="card-text">
                                Warmest Regards, <br />
                                {val.name} <br />
                                {val.post}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leader;
