import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import male1 from '../../assets/avatars/male1.jpg';
import male2 from '../../assets/avatars/male2.jpg';
import male3 from '../../assets/avatars/male3.png';
import male4 from '../../assets/avatars/male4.png';
import female1 from '../../assets/avatars/female1.jpg';
import female2 from '../../assets/avatars/female2.png';

import FullScreenLoader from '../Loader/FullScreenLoader';
import ButtonLoader from '../Loader/ButtonLoader';
import './index.css';

const avatarMap = {
  male1,
  male2,
  male3,
  male4,
  female1,
  female2,
};

const Profile = () => {
  const [user, setUser] = useState(null);
  const [avatarLoading, setAvatarLoading] = useState(null); // track which avatar is updating
  const token = Cookies.get('token');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/user/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [token]);

  const updateAvatar = async (avatar) => {
    setAvatarLoading(avatar); // start loader
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/user/profile`,
        { avatar },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setUser(res.data.user);
    } catch (error) {
      console.error('Error updating avatar:', error);
    } finally {
      setAvatarLoading(null); // stop loader
    }
  };

  if (!user) return <FullScreenLoader />; // show loader while fetching

  return (
    <div className="profile-card">
      <img
        src={avatarMap[user.avatar]}
        alt="avatar"
        className="avatar main-avatar"
      />
      <h3>{user.name}</h3>
      <p>{user.email}</p>

      <div className="avatar-options">
        {Object.keys(avatarMap).map((key) => (
          <div key={key} className="avatar-wrapper">
            <img
              src={avatarMap[key]}
              alt={key}
              onClick={() => updateAvatar(key)}
              className={`avatar picker-avatar ${
                user.avatar === key ? 'active' : ''
              }`}
            />
            {avatarLoading === key && (
              <div className="avatar-loader">
                <ButtonLoader />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
