import React, { useEffect, useState } from 'react';
import Profile from '../Profile';
import Tasks from '../Tasks';
import api from '../../api/axios';
import FullScreenLoader from '../Loader/FullScreenLoader';

import './index.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ loader state

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get('/api/user/profile');
        setUser(res.data);
      } catch (err) {
        console.error('Failed to fetch user:', err);
      } finally {
        setLoading(false); // ✅ stop loader
      }
    };

    fetchUser();
  }, []);

  // Show fullscreen loader until user data is ready
  if (loading) return <FullScreenLoader />;

  return (
    <div className="dashboard-container">
      <Profile user={user} setUser={setUser} />
      <Tasks />
    </div>
  );
};

export default Dashboard;
