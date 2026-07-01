import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2>Employee Management System</h2>
      <div>
        <span>{user?.name} ({user?.role})</span>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;