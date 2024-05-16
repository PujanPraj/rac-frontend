import React from "react";
import LoginPage from "../Homecomponent/Login";
import Heading from "../Homecomponent/Heading";

const Login = () => {
  return (
    <div>
      <div className="pageHeader py-4">
        <Heading title="LOGIN" />
      </div>
      <LoginPage />
    </div>
  );
};

export default Login;
