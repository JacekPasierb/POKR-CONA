import React from "react";

import css from "./MainSection.module.css";
import TitleSection from "../TitleSection/TitleSection";
import Service from "../Service/Service";
import { useMediaQuery } from "react-responsive";

const MainSection = () => {
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
    <div>
      <TitleSection title1="Zakres usług" title2="Zadbaj o siebie" />
      <ul className={css.cards}>
        <li className={css.card}>
          <Service
            title={"Modelowanie"}
            backgroundImage={getBackgroundImage("modeling")}
          />
        </li>
        <li className={css.card}>
          <Service
            title={"Pielęgnacja Twarzy"}
            backgroundImage={getBackgroundImage("facialCare")}
          />
        </li>
        <li className={css.card}>
          <Service
            title={"Stylizacja Paznokci"}
            backgroundImage={getBackgroundImage("nailStyling")}
          />
        </li>
        <li className={css.card}>
          <Service
            title={"Stylizacja Rzęs"}
            backgroundImage={getBackgroundImage("lashStyling")}
          />
        </li>
        <li className={css.card}>
          <Service
            title={"Laminacja"}
            backgroundImage={getBackgroundImage("laminating")}
          />
        </li>
        <li className={css.card}>
          <Service
            title={"Stylizacja Brwi"}
            backgroundImage={getBackgroundImage("browStyling")}
          />
        </li>
        <li className={css.card}>
          <Service
            title={"Depilacja - Wosk"}
            backgroundImage={getBackgroundImage("modeling")}
          />
        </li>
      </ul>
    </div>
  );
};

export default MainSection;
