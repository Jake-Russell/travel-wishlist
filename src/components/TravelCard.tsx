import React from 'react';
import './TravelCard.scss';

const lookup = require('country-code-lookup');

const TravelCard = ({ data }) => {
  const { country, city, flightPrice, hotelPrice } = data;
  const countryCode = lookup.byCountry(country).iso2;
  const countryFlag = getFlagEmoji(countryCode);

  return (
    <div className="travel-card">
      <div className="flag">{countryFlag}</div>
      <h1>{country}</h1>
      <h2>{city}</h2>
      <p className="price">
        Flight Price: <span>{formatAsCurrency(flightPrice)}</span> return
      </p>
      <p className="price">
        Hotel Price: <span>{formatAsCurrency(hotelPrice)}</span> per night
      </p>
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

function formatAsCurrency(number, currencySymbol = 'GBP') {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currencySymbol,
  }).format(number);
}

export default TravelCard;
