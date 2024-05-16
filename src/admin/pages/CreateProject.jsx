import React, { useState } from "react";
import CreateForm from "../components/CreateForm";
import Heading from "../components/Heading";
import axios from "axios";
import { REACT_URL } from "../../constants/ReactUrl";
import toast from "react-hot-toast";

const CreateProject = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formmData) => {
    try {
      setLoading(true);
      const response = await axios.post(`${REACT_URL}/projects`, formmData);

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Heading title="Create Project" />
      <CreateForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
};

export default CreateProject;
