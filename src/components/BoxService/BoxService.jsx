import React from "react";
import TitlePricing from "../TitlePricing/TitlePricing";
import Line from "../Line/Line";
import css from "./BoxService.module.css";
import PropTypes from "prop-types";

const BoxService = ({ pricing, service }) => {
  return (
    <>
      <TitlePricing title1={pricing.Category} title2={service.name} />
      {service.options && service.options.length > 0 && (
        <ul className={css.sectionServices}>
          {service.options.map((option) => (
            <li key={option.id} className={css.fadeIn}>
              <div className={css.serviceItem}>
                <p>{option.option}</p>
                <p>{option.value}</p>
              </div>
              <Line color={"rgba(208, 169, 86, 0.2)"} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

BoxService.propTypes = {
  pricing: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      Category: PropTypes.string.isRequired,
      Services: PropTypes.array.isRequired,
    })
  ).isRequired,
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        option: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};

export default BoxService;
