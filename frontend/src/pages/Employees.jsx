import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EmployeeCard from "../components/EmployeeCard";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const getEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  const deleteEmployee = async (id) => {
    await API.delete(`/employees/${id}`);
    getEmployees();
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="content">
          <h1>Employees</h1>

          {employees.map((employee) => (
            <EmployeeCard
              key={employee._id}
              employee={employee}
              userRole={user?.role}
              onEdit={(id) => navigate(`/edit-employee/${id}`)}
              onDelete={deleteEmployee}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Employees;