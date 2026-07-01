import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";

function Profile() {
  const [user, setUser] = useState(null);

  const getProfile = async () => {
    const res = await API.get("/auth/me");
    setUser(res.data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  if (!user) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="content">
          <h1>Profile</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      </div>
    </>
  );
}

export default Profile;