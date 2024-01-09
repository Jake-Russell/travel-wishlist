import React from 'react';
import airplaneSvg from '../assets/airplane.svg';
import './FlightDuration.scss';

const FlightDuration = ({ durationInMinutes }) => {
  return (
    <div className="flight-duration">
      <img
        src={airplaneSvg}
        alt="airplane"
        className="flight-duration__airplane-emoji"
      />
      <div className="flight-duration__line" />
      <h3 className="flight-duration__text">
        {timeConversion(durationInMinutes)}
      </h3>
      <div className="flight-duration__line" />
      <img
        src={airplaneSvg}
        alt="airplane"
        className="flight-duration__airplane-emoji"
      />
    </div>
  );
};

const timeConversion = (number) => {
  const hours = Math.floor(number / 60);
  const minutes = number % 60;
  return `${hours}h ${minutes}m`;
};

export default FlightDuration;
