import React from "react";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

import css from "./BoxService.module.css";

import TitlePricing from "../TitlePricing/TitlePricing";
import Line from "../Line/Line";

const BoxService = ({ pricing, service }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={inView ? css.fadeIn : ""}>
      <TitlePricing title1={pricing.Category} title2={service.name} />
      {service.options && service.options.length > 0 && (
        <ul className={css.sectionServices}>
          {service.options.map((option) => (
            <li key={option.id}>
              <div className={css.serviceItem}>
                <p>{option.option}</p>
                <p className={css.serviceItemValue}>{option.value}</p>
              </div>
              <Line color={"rgba(208, 169, 86, 0.2)"} />
            </li>
          ))}
        </ul>
      )}
    </div>
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
