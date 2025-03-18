const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controller/taskController");
const authMiddleware = require("../auth/auth");

const router = express.Router();

router.post("/", authMiddleware, createTask);
router.post("/getAll", authMiddleware, getTasks);
router.put("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;
