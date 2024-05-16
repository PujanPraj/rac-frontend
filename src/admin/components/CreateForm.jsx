import React, { useState } from "react";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import { MdSend } from "react-icons/md";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

const CreateForm = ({
  title: existingTitle = "",
  para: existingDescription = "",
  date: existingDate = "",
  img: existingImage = null,
  onSubmit = () => {},
  loading = false,
}) => {
  const project_data = {
    title: existingTitle || "",
    para: existingDescription || "",
    date: existingDate || "",
    img: existingImage || "",
  };

  const project_schema = Yup.object().shape({
    title: Yup.string().required("Title is Required"),
    para: Yup.string().required("Description is Required"),
    date: Yup.string().required("Date is Required"),
  });

  const [data, setData] = useState(project_data);

  const formik = useFormik({
    initialValues: data,
    validationSchema: project_schema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("para", values.para);
      formData.append("date", values.date);
      formData.append("img", values.img);
      onSubmit(formData);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3 d-flex" controlId="title">
        <div style={{ width: "20%" }}>
          <Form.Label>Title : </Form.Label>
        </div>
        <div style={{ width: "100%" }}>
          <Form.Control
            style={{ width: "100%" }}
            className="border p-2"
            type="text"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
            placeholder="Enter title"
          />
          {formik.errors.title && formik.touched.title ? (
            <em className=" text-danger">{formik.errors.title}</em>
          ) : null}
        </div>
      </Form.Group>

      <Form.Group className="mb-3 d-flex" controlId="para">
        <div style={{ width: "20%" }}>
          <Form.Label>Description : </Form.Label>
        </div>
        <div style={{ width: "100%" }}>
          <Form.Control
            style={{ width: "100%" }}
            className="border p-2"
            as="textarea"
            rows={3}
            name="para"
            onChange={formik.handleChange}
            value={formik.values.para}
            placeholder="Enter description"
          />
          {formik.errors.para && formik.touched.para ? (
            <em className=" text-danger">{formik.errors.para}</em>
          ) : null}
        </div>
      </Form.Group>

      <Form.Group className="mb-3 d-flex" controlId="date">
        <div style={{ width: "20%" }}>
          <Form.Label>Date : </Form.Label>
        </div>
        <div style={{ width: "100%" }}>
          <Form.Control
            style={{ width: "100%" }}
            className="border p-2"
            name="date"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.date}
            placeholder="Enter Date"
          />
          {formik.errors.date && formik.touched.date ? (
            <em className=" text-danger">{formik.errors.date}</em>
          ) : null}
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

export default CreateForm;
