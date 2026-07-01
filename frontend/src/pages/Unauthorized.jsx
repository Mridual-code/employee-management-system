import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div className="auth-container">
      <div className="form">
        <h2>Unauthorized Access</h2>
        <p>You do not have permission to access this page.</p>
        <Link to="/dashboard">Go Back</Link>
      </div>
    </div>
  );
}

export default Unauthorized;