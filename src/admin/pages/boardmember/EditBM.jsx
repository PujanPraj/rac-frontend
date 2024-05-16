import React, { useEffect, useState } from "react";
import BMForm from "../../components/boardMember/BMForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { REACT_URL } from "../../../constants/ReactUrl";

const EditBM = () => {
  const { id } = useParams();
  const [BM, setBM] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${REACT_URL}/boardMembers/${id}`);
        if (response.data.success) {
          setBM(response.data.data);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProject();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `${REACT_URL}/boardMembers/${id}`,
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
      <h3 className="my-4">Edit Board Member</h3>
      {BM && (
        <BMForm
          name={BM.name}
          post={BM.post}
          onSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </div>
  );
};

export default EditBM;
