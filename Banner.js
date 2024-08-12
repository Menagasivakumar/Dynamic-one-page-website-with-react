import React from 'react';
import BannerCountdown from './BannerCountdown';

const Banner = ({ description, link, timer, visible }) => {
  if (!visible) return null;

  return (
    <div className="banner">
      <h2>{description}</h2>
      <p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </p>
      <BannerCountdown timer={timer} />
    </div>
  );
};

export default Banner;