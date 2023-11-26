import React, { useEffect, useState } from "react";
import css from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ text }) => {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 500); // Czas trwania animacji
    }, 5000); // Czas między animacjami

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <button
      type="button"
      className={`${css.button} ${isShaking ? css.buttonAnimation : ""}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
