import React from 'react';
import './TravelCard.scss';

const TravelCard = ({ data }) => {
  const { country, city, price } = data;
  return (
    <div className="travel-card">
      <h1>{country}</h1>
      <p>{city}</p>
      <p>{price}</p>
    </div>
  );
};

export default TravelCard;
