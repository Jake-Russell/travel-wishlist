import React from "react";
import planeArrivalSvg from "../assets/plane-arrival.svg";
import planeDepartureSvg from "../assets/plane-departure.svg";
import "./FlightDuration.scss";
import { emojiCodePoints } from "../utils/emojis.ts";

const FlightDuration = ({ durationInMinutes }) => {
  return (
    <div className="flight-duration">
      {/* <img
        src={planeDepartureSvg}
        alt="airplane"
        className="flight-duration__airplane-emoji"
      /> */}
      <div className="emoji-container flight-duration__airplane-emoji">
        {emojiCodePoints.planeDeparture}
      </div>
      <div className="flight-duration__line" />
      <h3 className="flight-duration__text">
        {timeConversion(durationInMinutes)}
      </h3>
      <div className="flight-duration__line" />
      <div className="emoji-container flight-duration__airplane-emoji">
        {emojiCodePoints.planeArrival}
      </div>

      {/* <img
        src={planeArrivalSvg}
        alt="airplane"
        className="flight-duration__airplane-emoji"
      /> */}
    </div>
  );
};

const timeConversion = (number) => {
  const hours = Math.floor(number / 60);
  const minutes = number % 60;
  return `${hours}h ${minutes}m`;
};

export default FlightDuration;
