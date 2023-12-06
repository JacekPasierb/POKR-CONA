import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import css from "./Service.module.css";

const Service = ({ title, backgroundImage }) => {
  const [background, setBackground] = useState("");

  useEffect(() => {
    const loadBackground = async () => {
      const backgroundPath = await backgroundImage;
      setBackground(backgroundPath);
    };

    loadBackground();
  }, [backgroundImage]);

  return (
    <>
      <img src={background} alt={title} />
      <p className={css.serviceBox__title}>{title}</p>
    </>
  );
};

Service.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.any.isRequired,
};

export default Service;
