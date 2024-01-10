import React from 'react';
import './TravelCard.scss';

import lookup from 'country-code-lookup';
import FlightDuration from './FlightDuration.tsx';

const handleCardClick = (country: string, city: string) => {
  alert(`${city}, ${country} clicked.`);
};

const TravelCard = ({ data }) => {
  const { country, city, flightPrice, hotelPrice, flightDuration } = data;
  const countryCode = lookup.byCountry(country)?.iso2;
  const countryFlag = getFlagEmoji(countryCode);

  return (
    <div className="travel-card" onClick={() => handleCardClick(country, city)}>
      <div className="travel-card__flag-emoji">{countryFlag}</div>
      <h1 className="travel-card__country">{country}</h1>
      <h2 className="travel-card__city">{city}</h2>
      <p className="travel-card__price">
        Flight Price: <span>{formatAsCurrency(flightPrice)}</span> return
      </p>
      <p className="travel-card__price">
        Hotel Price: <span>{formatAsCurrency(hotelPrice)}</span> per night
      </p>
      <FlightDuration durationInMinutes={flightDuration} />
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
