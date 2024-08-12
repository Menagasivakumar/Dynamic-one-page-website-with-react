import React, { useState, useEffect } from 'react';

const BannerCountdown = ({ timer }) => {
  const [countdown, setCountdown] = useState(timer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdown]);

  return (
    <p>
      Countdown: {countdown} seconds
    </p>
  );
};

export default BannerCountdown;