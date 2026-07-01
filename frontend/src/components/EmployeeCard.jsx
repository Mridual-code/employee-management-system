function EmployeeCard({ employee, onDelete, onEdit, userRole }) {
  return (
    <div className="card">
      <h3>{employee.name}</h3>
      <p>Email: {employee.email}</p>
      <p>Department: {employee.department}</p>
      <p>Position: {employee.position}</p>
      <p>Salary: {employee.salary}</p>

      {(userRole === "Admin" || userRole === "Manager") && (
        <button onClick={() => onEdit(employee._id)}>Edit</button>
      )}

      {userRole === "Admin" && (
        <button onClick={() => onDelete(employee._id)}>Delete</button>
      )}
    </div>
  );
}

export default EmployeeCard;