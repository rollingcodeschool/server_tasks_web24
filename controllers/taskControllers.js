import mongoose from "mongoose";
import Task from "../models/task.js";

const getTasks = async (req, res) => {
  const tasks = await Task.find();

  res.json({
    tasks,
  });
};

const postTask = async (req, res) => {
  const { title, description } = req.body;

  const task = new Task({ title, description });

  await task.save();

  res.json({
    msg: "Tarea nueva guardada!",
    task,
  });
};

const putTask = (req, res) => {
  res.json({
    msg: "PUT de Router",
  });
};

const deleteTask = (req, res) => {
  res.json({
    msg: "DELETE de Router",
  });
};

export { getTasks, postTask, putTask, deleteTask };
