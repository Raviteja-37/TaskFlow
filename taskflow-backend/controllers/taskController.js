const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    userId: req.user.id,
  });
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const { search, status } = req.query;

  let query = { userId: req.user.id };

  if (search) {
    query.title = { $regex: search, $options: 'i' };
  }

  if (status === 'completed') {
    query.completed = true;
  } else if (status === 'pending') {
    query.completed = false;
  }

  const tasks = await Task.find(query).sort({ createdAt: -1 });
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
};
