import React, { useState } from "react";
import "./TravelCard.scss";

import { getFlagEmoji } from "../utils/emojis.ts";
import { formatAsCurrency } from "../utils/currency.ts";

import lookup from "country-code-lookup";
import FlightDuration from "./FlightDuration.tsx";
import TravelCardDialog from "./TravelCardDialog.tsx";

const TravelCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const { country, city, flightPrice, hotelPrice, flightDuration } = data;
  const countryCode = lookup.byCountry(country)?.iso2;
  const countryFlag = getFlagEmoji(countryCode);

  const handleCardClick = (country: string, city: string) => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="travel-card"
        onClick={() => handleCardClick(country, city)}
      >
        <div className="travel-card__flag">
          <div className="emoji-container">{countryFlag}</div>
        </div>
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
      <TravelCardDialog open={showModal} onClose={handleCloseModal} />
    </>
  );
};

export default TravelCard;
