import React, { useState } from "react";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import { MdSend } from "react-icons/md";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

const CreateForm = ({
  name: existingName = "",
  post: existingDescription = "",
  onSubmit = () => {},
  loading = false,
}) => {
  const BM_data = {
    name: existingName || "",
    post: existingDescription || "",
    image: "",
  };

  const BM_schema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    post: Yup.string().required("Description is Required"),
  });

  const [data, setData] = useState(BM_data);

  const formik = useFormik({
    initialValues: data,
    validationSchema: BM_schema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("post", values.post);
      formData.append("image", values.image);

      onSubmit(formData);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3 d-flex" controlId="name">
        <div style={{ width: "20%" }}>
          <Form.Label>name : </Form.Label>
        </div>
        <div style={{ width: "100%" }}>
          <Form.Control
            style={{ width: "100%" }}
            className="border p-2"
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Enter name..."
          />
          {formik.errors.name && formik.touched.name ? (
            <em className=" text-danger">{formik.errors.name}</em>
          ) : null}
        </div>
      </Form.Group>

      <Form.Group className="mb-3 d-flex" controlId="post">
        <div style={{ width: "20%" }}>
          <Form.Label>Post : </Form.Label>
        </div>
        <div style={{ width: "100%" }}>
          <Form.Control
            style={{ width: "100%" }}
            className="border p-2"
            type="text"
            name="post"
            onChange={formik.handleChange}
            value={formik.values.post}
            placeholder="Enter degination"
          />
          {formik.errors.post && formik.touched.post ? (
            <em className=" text-danger">{formik.errors.post}</em>
          ) : null}
        </div>
      </Form.Group>

      <Form.Group className="mb-3 d-flex" controlId="image">
        <div style={{ width: "20%" }}>
          <Form.Label>Image : </Form.Label>
        </div>
        <div style={{ width: "100%" }}>
          <Form.Control
            style={{ width: "100%" }}
            className="border  p-2"
            type="file"
            accept="image/*"
            name="img"
            onChange={(event) => {
              formik.values.image = event.currentTarget.files[0];
            }}
            // required
          />
        </div>
      </Form.Group>

      <Button
        type="submit"
        className="w-40"
        disabled={loading || formik.isSubmitting}
      >
        <MdSend className="w-5 h-5" />
        &nbsp; {loading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

export default CreateForm;
