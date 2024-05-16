import React, { useEffect, useState } from "react";
import CreateForm from "../components/CreateForm";
import { useParams } from "react-router-dom";
import { REACT_URL } from "../../constants/ReactUrl";
import axios from "axios";
import toast from "react-hot-toast";

const EditProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${REACT_URL}/projects/${id}`);
        if (response.data.success) {
          setProject(response.data.data);
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
      const response = await axios.put(`${REACT_URL}/projects/${id}`, formData);
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
      <h3 className="my-4">Edit Project</h3>
      {project && (
        <CreateForm
          title={project.title}
          para={project.para}
          date={project.date}
          onSubmit={handleSubmit}
          loading={loading}
        />
      )}
    </div>
  );
};

export default EditProject;
