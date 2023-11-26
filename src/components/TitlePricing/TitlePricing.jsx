import React from "react";
import PropTypes from "prop-types";

import css from "./TitlePricing.module.css";
const TitlePricing = ({ title1, title2 }) => {
  return (
    <div className={css.titleSection}>
      <h3 className={css.titleSecond}>{title1}</h3>
      <h4 className={css.titleFirst}>{title2}</h4>
    </div>
  );
};

TitlePricing.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
};

export default TitlePricing;
