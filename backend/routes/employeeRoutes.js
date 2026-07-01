const express = require("express");
const Employee = require("../models/Employee");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  roleMiddleware("Admin", "Manager"),
  async (req, res) => {
    const employees = await Employee.find();
    res.status(200).json(employees);
  }
);

router.get(
  "/:id",
  authMiddleware,
  roleMiddleware("Admin", "Manager"),
  async (req, res) => {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(employee);
  }
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("Admin", "Manager"),
  async (req, res) => {
    const { name, email, department, position, salary } = req.body;

    if (!name || !email || !department || !position || !salary) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const employee = await Employee.create({
      name,
      email,
      department,
      position,
      salary
    });

    res.status(201).json({
      message: "Employee created successfully",
      employee
    });
  }
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("Admin", "Manager"),
  async (req, res) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee updated successfully",
      employee
    });
  }
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("Admin"),
  async (req, res) => {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee deleted successfully" });
  }
);

module.exports = router;