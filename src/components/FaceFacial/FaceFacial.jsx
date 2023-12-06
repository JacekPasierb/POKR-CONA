import React from "react";

import css from "./FaceFacial.module.css";
import TitlePricing from "../TitlePricing/TitlePricing";
import pricings from "../../../data/pricings.json";
import Line from "../Line/Line";

const FaceFacial = () => {
  return (
    <ul>
      {pricings.map(
        (pricing) =>
          pricing.Category === "Pielęgnacja twarzy" && (
            <li key={pricing.id}>
              {pricing.Services && pricing.Services.length > 0 && (
                <ul className={css.sectionModeling}>
                  {pricing.Services.map((service) => (
                    <li key={service.id}>
                      <TitlePricing
                        title1={pricing.Category}
                        title2={service.name}
                      />
                      {service.options && service.options.length > 0 && (
                        <ul className={css.sectionServices}>
                          {service.options.map((option) => (
                            <li key={option.id}>
                              <div className={css.serviceItem}>
                                <p>{option.option}</p>
                                <p>{option.value}</p>
                              </div>
                              <Line color={"rgba(208, 169, 86, 0.2)"} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
      )}
    </ul>
  );
};

export default FaceFacial;
