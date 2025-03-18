const { Task } = require("../models/taskModel");

const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.body.userId });
    console.log("tasks",tasks)
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
};

const updateTask = async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Task updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
