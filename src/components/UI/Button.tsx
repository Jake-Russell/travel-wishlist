import React from "react";
import "./Button.scss";

const Button = ({ label, onClick, filled }) => {
  const buttonClassName = `custom-button ${filled ? "filled" : "unfilled"}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
