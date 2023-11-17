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

  const serviceStyle = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div className={css.serviceBox} style={serviceStyle}>
      <p className={css.serviceBox__overlay}>SPRAWDŹ Ofertę</p>
      <h5 className={css.serviceBox__title}>{title}</h5>
    </div>
  );
};

Service.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.object.isRequired,
};
export default Service;
