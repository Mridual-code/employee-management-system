import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EmployeeForm from "../components/EmployeeForm";

function EditEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
    salary: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const getEmployee = async () => {
    const res = await API.get(`/employees/${id}`);
    setFormData(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/employees/${id}`, formData);
    navigate("/employees");
  };

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="content">
          <h1>Edit Employee</h1>
          <EmployeeForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            buttonText="Update Employee"
          />
        </div>
      </div>
    </>
  );
}

export default EditEmployee;