import React from "react";
import "./Button.scss";

const Button = ({ label, icon, onClick, filled }) => {
  const buttonClassName = `custom-button ${filled ? "filled" : "unfilled"}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {icon && (
        <div
          className={`icon-container ${
            icon && label ? "icon-container__margin" : undefined
          }`}
        >
          {icon}
        </div>
      )}
      {label}
    </button>
  );
};

export default Button;
