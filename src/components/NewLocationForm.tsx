import React from "react";
import { useInput } from "../hooks/useInput.tsx";
import { isNotEmpty } from "../utils/inputValidation.ts";
import Input from "./UI/Input.tsx";
import Button from "./UI/Button.tsx";
import { emojiCodePoints } from "../utils/emojis.ts";

const NewLocationForm = () => {
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

  const isFormValid = isNotEmpty(countryValue) && isNotEmpty(cityValue);

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Thank you for submitting the form!`);

    resetCountry();
    resetCity();
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
