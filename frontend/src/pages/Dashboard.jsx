import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="content">
          <h1>Dashboard</h1>
          <p>Welcome, {user?.name}</p>
          <p>Your role is: {user?.role}</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;