import React from "react";
import PropTypes from "prop-types";
import css from "./DescriptionSection.module.css";

const DescriptionSection = ({ description }) => {
  return (
    <div className={css.descriptionSection}>
      <p className={css.description}>{description}</p>
    </div>
  );
};

DescriptionSection.propTypes = {
  description: PropTypes.string,
};

export default DescriptionSection;
