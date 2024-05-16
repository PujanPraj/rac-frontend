import React, { useState } from "react";
import BMForm from "../../components/boardMember/BMForm";
import axios from "axios";
import { REACT_URL } from "../../../constants/ReactUrl";
import toast from "react-hot-toast";
import Heading from "../../components/Heading";

const CreateBM = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);
      const response = await axios.post(`${REACT_URL}/boardMembers`, formData);
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
      <Heading title={"Create Board Member"} />
      <BMForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
};

export default CreateBM;
