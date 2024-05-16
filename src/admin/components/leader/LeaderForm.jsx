import React, { useState } from "react";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import { MdSend } from "react-icons/md";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

const LeaderForm = ({
  img: existingImg = "",
  name: existingName = "",
  post: existingDescription = "",
  msg1: existingMsg1 = "",
  msg2: existingMsg2 = "",
  onSubmit = () => {},
  loading = false,
}) => {
  const Leader_data = {
    img: existingImg || "",
    name: existingName || "",
    post: existingDescription || "",
    msg1: existingMsg1 || "",
    msg2: existingMsg2 || "",
  };

  const Leader_schema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    post: Yup.string().required("Post is Required"),
    msg1: Yup.string().required("1st paragraph is Required"),
  });

  const [data, setData] = useState(Leader_data);

  const formik = useFormik({
    initialValues: data,
    validationSchema: Leader_schema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("img", values.img);
      formData.append("name", values.name);
      formData.append("post", values.post);
      formData.append("msg1", values.msg1);
      formData.append("msg2", values.msg2);

      onSubmit(formData);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3 d-flex" controlId="name">
        <div style={{ width: "20%" }}>
          <Form.Label>Name : </Form.Label>
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

      <Form.Group className="mb-3 d-flex" controlId="msg1">
        <div style={{ width: "20%" }}>
          <Form.Label>Msg1 : </Form.Label>
        </div>
        <div style={{ width: "100%" }}>
          <Form.Control
            style={{ width: "100%" }}
            className="border p-2"
            type="text"
            as="textarea"
            rows={3}
            name="msg1"
            onChange={formik.handleChange}
            value={formik.values.msg1}
            placeholder="Paragraph 1"
          />
          {formik.errors.msg1 && formik.touched.msg1 ? (
            <em className=" text-danger">{formik.errors.msg1}</em>
          ) : null}
        </div>
      </Form.Group>

      <Form.Group className="mb-3 d-flex" controlId="msg2">
        <div style={{ width: "20%" }}>
          <Form.Label>Msg2 : </Form.Label>
        </div>
        <div style={{ width: "100%" }}>
          <Form.Control
            style={{ width: "100%" }}
            className="border p-2"
            type="text"
            as="textarea"
            rows={3}
            name="msg2"
            onChange={formik.handleChange}
            value={formik.values.msg2}
            placeholder="Paragraph 2"
          />
        </div>
      </Form.Group>

      <Form.Group className="mb-3 d-flex" controlId="img">
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
              formik.values.img = event.currentTarget.files[0];
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

export default LeaderForm;
