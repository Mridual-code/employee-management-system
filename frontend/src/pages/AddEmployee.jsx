import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EmployeeForm from "../components/EmployeeForm";

function AddEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
    salary: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/employees", formData);
    navigate("/employees");
  };

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="content">
          <h1>Add Employee</h1>
          <EmployeeForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            buttonText="Add Employee"
          />
        </div>
      </div>
    </>
  );
}

export default AddEmployee;