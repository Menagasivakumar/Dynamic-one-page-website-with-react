import React, { useState, useEffect } from 'react';
import api from '../api/banner';

const Dashboard = () => {
  const [bannerOn, setBannerOn] = useState(true);
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState(30);
  const [link, setLink] = useState('');

  useEffect(() => {
    api.getBanner().then((banner) => {
      setBannerOn(banner.visible);
      setDescription(banner.description);
      setTimer(banner.timer);
      setLink(banner.link);
    });
  }, []);

  const handleToggleBanner = () => {
    setBannerOn(!bannerOn);
    api.updateBanner({ visible: !bannerOn });
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    api.updateBanner({ description: event.target.value });
  };

  const handleTimerChange = (event) => {
    setTimer(event.target.value);
    api.updateBanner({ timer: event.target.value });
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
    api.updateBanner({ link: event.target.value });
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <form>
        <label>
          Banner On/Off:
          <input
            type="checkbox"
            checked={bannerOn}
            onChange={handleToggleBanner}
          />
        </label>
        <br />
        <label>
          Banner Description:
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </label>
        <br />
        <label>
          Banner Timer (seconds):
          <input
            type="number"
            value={timer}
            onChange={handleTimerChange}
          />
        </label>
        <br />
        <label>
          Banner Link:
          <input
            type="text"
            value={link}
            onChange={handleLinkChange}
          />
        </label>
        <br />
      </form>
    </div>
  );
};

export default Dashboard;