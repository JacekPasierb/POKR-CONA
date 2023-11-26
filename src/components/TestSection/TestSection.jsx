import React, { useEffect } from "react";
import css from "./TestSection.module.css";
import TitleSection from "../TitleSection/TitleSection";
import pricings from "../../../data/pricings.json";

import g from "../../images/facialCareDesctop1x.jpg";
import { useMediaQuery } from "react-responsive";
import Service from "../Service/Service";
import Service1 from "../Service1/Service1";
const TestSection = () => {
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1200px)",
  });
  const isDesctop = useMediaQuery({ query: "(min-width: 1200px)" });

  const getBackgroundImage = async (titleImage) => {
    let imagePath = "";
    if (isMobile) {
      imagePath = await import(`../../images/${titleImage}Mobile1x.jpg`);
    } else if (isTablet) {
      imagePath = await import(`../../images/${titleImage}Tablet1x.jpg`);
    } else if (isDesctop) {
      imagePath = await import(`../../images/${titleImage}Desctop1x.jpg`);
    }
    if (isRetina) {
      if (imagePath.default) {
        imagePath = imagePath.default.replace("1x.jpg", "2x.jpg");
      } else {
        imagePath = imagePath.replace("1x.jpg", "2x.jpg");
      }
    }

    return imagePath.default || imagePath;
  };

  return (
    <>
      <TitleSection title1="Zakres usług" title2="Zadbaj o siebie" />
      <ul className={css.cards}>
        {pricings.map((price) => (
          <li key={price.id} className={css.card}>
            <Service1
              title={price.Category}
              backgroundImage={getBackgroundImage(`${price.Picture}`)}
            />
            <p className={css.serviceBox__overlay}>Sprawdź ofertę</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TestSection;
