import React from "react";
import RegisterPage from "../Homecomponent/Register";
import Heading from "../Homecomponent/Heading";

const Register = () => {
  return (
    <div>
      <div className="pageHeader py-4">
        <Heading title="REGISTER" />
      </div>
      <RegisterPage />
    </div>
  );
};

export default Register;
