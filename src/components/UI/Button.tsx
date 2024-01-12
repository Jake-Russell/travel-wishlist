import React from "react";
import "./Button.scss";

const Button = ({
  label,
  icon,
  onClick,
  filled = false,
  border = false,
  ...props
}) => {
  const buttonClassName = `custom-button ${filled ? "filled" : "unfilled"} ${
    border && "border"
  }`;

  return (
    <button className={buttonClassName} onClick={onClick} {...props}>
      {icon && (
        <div
          className={`icon-container ${
            icon && label && "icon-container__margin"
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
