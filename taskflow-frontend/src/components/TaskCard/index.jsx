import React, { useState } from 'react';
import api from '../../api/axios';
import ButtonLoader from '../Loader/ButtonLoader';
import './index.css';

const TaskCard = ({ task, refresh }) => {
  const [loading, setLoading] = useState(false);

  const toggleStatus = async () => {
    try {
      setLoading(true);
      await api.put(`/api/tasks/${task._id}`, { completed: !task.completed });
      refresh();
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async () => {
    try {
      setLoading(true);
      await api.delete(`/api/tasks/${task._id}`);
      refresh();
    } catch (error) {
      console.error('Error deleting task:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <div className="task-title">{task.title}</div>
      <div className="task-actions">
        <button onClick={toggleStatus} disabled={loading}>
          {loading
            ? 'Updating...'
            : task.completed
              ? 'Mark Pending'
              : 'Mark Done'}
        </button>
        <button onClick={deleteTask} disabled={loading}>
          {loading ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
