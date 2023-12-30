import React from "react";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
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
            <li key={nanoid()}>
              <div className={css.serviceItem}>
                <p>{option.option}</p>
                <div>
                  <p className={css.serviceItemValue}>{option.price}</p>
                  <p className={css.serviceItemValue}>{option.time}</p>
                </div>
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
  pricing: PropTypes.object.isRequired,
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        option: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};

export default BoxService;
