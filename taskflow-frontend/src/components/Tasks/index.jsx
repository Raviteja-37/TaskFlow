import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import TaskCard from '../TaskCard';
import './index.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    const res = await api.get('/api/tasks', {
      params: { search, status },
    });
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [search, status]);

  // ✅ ADD TASK
  const addTask = async () => {
    if (!title.trim()) return;

    setLoading(true);
    await api.post('/api/tasks', { title });
    setTitle('');
    fetchTasks();
    setLoading(false);
  };

  return (
    <div className="tasks-container">
      <h2>Your Tasks</h2>

      {/* 🔥 ADD TASK */}
      <div className="add-task">
        <input
          placeholder="Enter new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask} disabled={loading}>
          {loading ? 'Adding...' : 'Add Task'}
        </button>
      </div>

      {/* FILTERS */}
      <div className="task-filters">
        <input
          placeholder="Search tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* TASK LIST */}
      <div className="task-list">
        {tasks.length === 0 && <p>No tasks found</p>}

        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} refresh={fetchTasks} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
