import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import css from "./Service.module.css";
import { useInView } from "react-intersection-observer";

const Service = ({ title, backgroundImage }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [background, setBackground] = useState("");

  useEffect(() => {
    const loadBackground = async () => {
      const backgroundPath = await backgroundImage;
      setBackground(backgroundPath);
    };

    loadBackground();
  }, [backgroundImage]);

  return (
    <div ref={ref} className={`${inView ? css.fadeIn : ""} ${css.card}`}>
      <img src={background} alt={title} />
      <p className={css.serviceBox__title}>{title}</p>
    </div>
  );
};

Service.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.any.isRequired,
};

export default Service;
