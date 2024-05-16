import React, { useState } from "react";
import Heading from "../../components/Heading";
import LeaderForm from "../../components/leader/LeaderForm";
import { REACT_URL } from "../../../constants/ReactUrl";
import axios from "axios";
import toast from "react-hot-toast";

const CreateLeader = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);
      const response = await axios.post(`${REACT_URL}/leaders`, formData);

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
      <Heading title={"Create Leader"} />
      <LeaderForm loading={loading} onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateLeader;
