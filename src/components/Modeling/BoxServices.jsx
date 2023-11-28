import React, { Suspense, lazy } from "react";

import pricings from "../../../data/pricings.json";
import css from "./BoxServices.module.css";
import TitleSection from "../TitleSection/TitleSection";

const BoxService = lazy(() => import("../BoxService/BoxService"));

const BoxServices = () => {
  return (
    <ul className={css.back}>
      <TitleSection title1={"Cennik"} />
      {pricings.map((pricing) => (
        <li key={pricing.id}>
          {pricing.Services && pricing.Services.length > 0 && (
            <ul className={css.sectionBoxServices} id={pricing.Picture}>
              {pricing.Services.map((service) => (
                <li key={service.id}>
                  <Suspense fallback={<div>Loading service... </div>}>
                    <BoxService pricing={pricing} service={service} />
                  </Suspense>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default BoxServices;
