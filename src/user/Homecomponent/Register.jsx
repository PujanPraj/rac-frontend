import React from "react";
import "./CSS/register.css";
import Button from "react-bootstrap/Button";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Row, Col, Container } from "react-bootstrap";

const registerSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password is too long")
    .required("Password is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
  fullName: Yup.string()
    .min(2, "Full Name is too short")
    .max(50, "Full Name is too long")
    .required("Full Name is Required"),
  phone: Yup.string().required("Phone Number is Required"),
  address: Yup.string().required("Address is Required"),
  age: Yup.number()
    .min(18, "You must be at least 18 years old")
    .required("Age is Required"),
  designation: Yup.string().required("Designation is Required"),
  bloodGroup: Yup.string().required("Blood Group is Required"),
  avatar: Yup.string().required("Avatar is Required"),
});

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const RegisterPage = () => {
  return (
    <Container className="register-form">
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          phone: "",
          address: "",
          age: "",
          designation: "",
          bloodGroup: "",
          avatar: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          console.log(values);
          // Submit logic goes here
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Row>
              <Col md={6}>
                {/* fullName */}
                <label>Full Name</label>
                <Field name="fullName" />
                {errors.fullName && touched.fullName ? (
                  <div className="error">{errors.fullName}</div>
                ) : null}

                {/* email */}
                <label>Email</label>
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}

                {/* password */}
                <label>Password</label>
                <Field name="password" type="password" />
                {errors.password && touched.password ? (
                  <div className="error">{errors.password}</div>
                ) : null}

                {/* phone */}
                <label>Phone Number</label>
                <Field name="phone" type="tel" />
                {errors.phone && touched.phone ? (
                  <div className="error">{errors.phone}</div>
                ) : null}
              </Col>

              <Col md={6}>
                {/* address */}
                <label>Address</label>
                <Field name="address" />
                {errors.address && touched.address ? (
                  <div className="error">{errors.address}</div>
                ) : null}

                {/* age */}
                <label>Age</label>
                <Field name="age" type="number" />
                {errors.age && touched.age ? (
                  <div className="error">{errors.age}</div>
                ) : null}

                {/* designation */}
                <label>Designation</label>
                <Field name="designation" />
                {errors.designation && touched.designation ? (
                  <div className="error">{errors.designation}</div>
                ) : null}

                {/* bloodGroup */}
                <label>Blood Group</label>
                <Field name="bloodGroup" as="select">
                  {bloodGroups.map((group) => (
                    <option className="text-dark" key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </Field>
                {errors.bloodGroup && touched.bloodGroup ? (
                  <div className="error">{errors.bloodGroup}</div>
                ) : null}

                {/* avatar */}
                <label>Avatar</label>
                <Field name="avatar" type="file" />
                {errors.avatar && touched.avatar ? (
                  <div className="error">{errors.avatar}</div>
                ) : null}
              </Col>
            </Row>

            <p>
              Already have an account? <a href="/login">Login</a>
            </p>

            <Button className="form-btn mt-3" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterPage;
