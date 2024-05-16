import React, { useState } from "react";
import axios from "axios";
import { REACT_URL } from "../../../constants/ReactUrl";
import toast from "react-hot-toast";
import Heading from "../../components/Heading";
import PastPresidentForm from "../../components/PastPresident/PastPresidentForm";

const CreatePastPresident = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${REACT_URL}/pastpresidents`,
        formData
      );
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
      <Heading title={"Create Past President"} />
      <PastPresidentForm onSubmit={handleSubmit} loading={loading} />
    </div>
  );
};

export default CreatePastPresident;
