import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import css from "./Button.module.css";

const Button = ({ text, url, icon }) => {
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
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button
        type="button"
        className={`${css.button} ${isShaking ? css.buttonAnimation : ""}`}
      >
        {icon} {text}
      </button>
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Button;
