import React from "react";
import "./Input.scss";

const Input = ({ label, id, type = "text", error, ...props }) => {
  return (
    <div className="input">
      <label htmlFor={id} className="input__label">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={`Please enter the ${label.toLowerCase()}...`}
        required
        {...props}
        className={`input__field ${error && "input__field--error"}`}
      />
      {error && <p className="input__error">{error}</p>}
    </div>
  );
};

export default Input;
