import React from "react";
import "./Button.css";

const Button = ({ label }) => {
  return <div data-testid="button" className="button">{label}</div>;
};
export default Button;
