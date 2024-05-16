import React, { useEffect, useState } from "react";
import BMForm from "../../components/boardMember/BMForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { REACT_URL } from "../../../constants/ReactUrl";

const EditMember = () => {
  const { id } = useParams();
  const [Member, setMember] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${REACT_URL}/members/${id}`);
        if (response.data.success) {
          setMember(response.data.data);
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
      const response = await axios.put(`${REACT_URL}/members/${id}`, formData);
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
      {Member && (
        <BMForm
          name={Member.name}
          post={Member.post}
          onSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </div>
  );
};

export default EditMember;
