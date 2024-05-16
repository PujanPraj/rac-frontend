import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { REACT_URL } from "../../../constants/ReactUrl";
import LeaderForm from "../../components/leader/LeaderForm";

const EditLeader = () => {
  const { id } = useParams();
  const [Leader, setLeader] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${REACT_URL}/leaders/${id}`);
        if (response.data.success) {
          setLeader(response.data.data);
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
      const response = await axios.put(`${REACT_URL}/leaders/${id}`, formData);
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
      {Leader && (
        <LeaderForm
          name={Leader.name}
          post={Leader.post}
          msg1={Leader.msg1}
          msg2={Leader.msg2}
          onSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </div>
  );
};

export default EditLeader;
