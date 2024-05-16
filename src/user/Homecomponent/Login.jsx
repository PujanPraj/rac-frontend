import React from "react";
import "./CSS/login.css";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { toast } from "react-hot-toast";

const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Password is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
});

const LoginPage = () => {
  return (
    <div className="login-form">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          const { email, password } = values;
          if (email === "admin123@gmail.com" && password === "admin123") {
            window.location.href = "/admin/dashboard";
            toast.success("Login successful");
          } else {
            toast.error("Invalid email or password");
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label>Email</label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? (
              <div className="error">{errors.email}</div>
            ) : null}

            <label>Password</label>
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
              <div className="error">{errors.password}</div>
            ) : null}

            <Button className="form-btn mt-3" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
