import { Link } from "react-router-dom";

function Sidebar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>

      {(user?.role === "Admin" || user?.role === "Manager") && (
        <>
          <Link to="/employees">Employees</Link>
          <Link to="/add-employee">Add Employee</Link>
        </>
      )}

      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Sidebar;