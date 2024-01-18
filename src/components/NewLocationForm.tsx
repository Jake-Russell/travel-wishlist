import React from "react";
import { useInput } from "../hooks/useInput.tsx";
import { isNotEmpty } from "../utils/inputValidation.ts";
import Input from "./UI/Input.tsx";
import Button from "./UI/Button.tsx";
import { emojiCodePoints } from "../utils/emojis.ts";

import firebase from "firebase/app";
import {
  onSnapshot,
  collection,
  query,
  orderBy,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase.js";

import "./NewLocationForm.scss";

const NewLocationForm = ({ close }) => {
  const {
    value: countryValue,
    handleInputChange: handleCountryChange,
    handleInputBlur: handleCountryBlur,
    hasError: countryHasError,
    handleReset: resetCountry,
  } = useInput("", (value) => isNotEmpty(value));

  const {
    value: cityValue,
    handleInputChange: handleCityChange,
    handleInputBlur: handleCityBlur,
    hasError: cityHasError,
    handleReset: resetCity,
  } = useInput("", (value) => isNotEmpty(value));

  const {
    value: flightPriceValue,
    handleInputChange: handleFlightPriceChange,
    handleInputBlur: handleFlightPriceBlur,
    hasError: flightPriceHasError,
    handleReset: resetFlightPrice,
  } = useInput("", (value) => isNotEmpty(value));

  const {
    value: hotelPriceValue,
    handleInputChange: handleHotelPriceChange,
    handleInputBlur: handleHotelPriceBlur,
    hasError: hotelPriceHasError,
    handleReset: resetHotelPrice,
  } = useInput("", (value) => isNotEmpty(value));

  const {
    value: flightDurationValue,
    handleInputChange: handleFlightDurationChange,
    handleInputBlur: handleFlightDurationBlur,
    hasError: flightDurationHasError,
    handleReset: resetFlightDuration,
  } = useInput("", (value) => isNotEmpty(value));

  const isFormValid = isNotEmpty(countryValue) && isNotEmpty(cityValue);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // / Create a Firestore document reference
    const collectionRef = collection(db, "wishlist");
    const locationData = {
      country: countryValue,
      city: cityValue,
      flightPrice: parseFloat(flightPriceValue) || 0,
      hotelPrice: parseFloat(hotelPriceValue) || 0,
      flightDuration: parseInt(flightDurationValue) || 0,
    };

    try {
      // Add data to Firestore using addDoc
      const docRef = await addDoc(collectionRef, locationData);
      console.log("Location data added to Firestore with ID:", docRef.id);

      // Reset form fields
      resetCountry();
      resetCity();
      resetFlightPrice();
      resetHotelPrice();
      resetFlightDuration();
      close();
    } catch (error) {
      console.error("Error adding location to Firestore:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-location-form">
      <Input
        label="Country"
        id="country"
        onBlur={handleCountryBlur}
        onChange={handleCountryChange}
        value={countryValue}
        error={countryHasError && "Please enter a valid country."}
      />
      <Input
        label="City"
        id="city"
        onBlur={handleCityBlur}
        onChange={handleCityChange}
        value={cityValue}
        error={cityHasError && "Please enter a valid city."}
      />
      <div className="new-location-form__price-fields">
        <Input
          label="Flight Price"
          id="flight_price"
          type="number"
          min="0"
          onBlur={handleFlightPriceBlur}
          onChange={handleFlightPriceChange}
          value={flightPriceValue}
          error={flightPriceHasError && "Please enter a valid flight price."}
        />
        <Input
          label="Hotel Price"
          id="hotel_price"
          type="number"
          min="0"
          onBlur={handleHotelPriceBlur}
          onChange={handleHotelPriceChange}
          value={hotelPriceValue}
          error={hotelPriceHasError && "Please enter a valid hotel price."}
        />
      </div>

      <Input
        label="Flight Duration (Minutes)"
        id="flight_duration"
        type="number"
        min="0"
        onBlur={handleFlightDurationBlur}
        onChange={handleFlightDurationChange}
        value={flightDurationValue}
        error={
          flightDurationHasError &&
          "Please enter a valid flight duration in minutes."
        }
      />
      <div className="button-container">
        <Button
          label="Add location"
          icon={emojiCodePoints.add}
          onClick={handleSubmit}
          disabled={!isFormValid}
          filled
          border
        />
      </div>
    </form>
  );
};

export default NewLocationForm;
