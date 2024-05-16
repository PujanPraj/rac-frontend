import React from "react";
import Heading from "../Homecomponent/Heading";
import Form from "../Homecomponent/Form";

const Contact = () => {
  return (
    <>
      <div className="pageHeader py-4">
        <Heading title="Contact Us " />
      </div>
      <div className="contactSection pb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-lg-6 mb-5">
              <div className="text-center text-white">
                <img
                  src="./Logo/minilogo.png"
                  style={{ width: "150px" }}
                  alt=""
                />
                <h2>Rotaract Club Of Madhyapur</h2>
                <p className="text-white">
                  <i class="fa-regular fa-envelope"></i>
                  rotaract.madhyapur@gmail.com
                </p>
                <p className="text-white">
                  <i class="fa-solid fa-location-dot"></i>
                  Kumar Bakary, Madhyapur thimi
                </p>
                <div className="socialIcons justify-content-center d-flex gap-3">
                  <a
                    href="https://www.facebook.com/rac.madhyapur"
                    target="_blank"
                  >
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/rotaract.madhyapur/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-6 mb-5">
              <Form />
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28264.318359937883!2d85.3789226!3d27.6851649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a419f80aa67%3A0x288ab8841508315f!2sMadhyapur%20Thimi!5e0!3m2!1sen!2snp!4v1696577125677!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
