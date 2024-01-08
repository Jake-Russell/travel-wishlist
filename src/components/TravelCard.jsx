import React from 'react';
import './TravelCard.scss';

const lookup = require('country-code-lookup');

const TravelCard = ({ data }) => {
  const { country, city, price } = data;
  const countryCode = lookup.byCountry(country).iso2;
  console.log(countryCode);
  const countryFlag = getFlagEmoji(countryCode);

  return (
    <div className="travel-card">
      <div className="flag">{countryFlag}</div>
      <h1>{country}</h1>
      <p>{city}</p>
      <p>{price}</p>
    </div>
  );
};

function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export default TravelCard;
