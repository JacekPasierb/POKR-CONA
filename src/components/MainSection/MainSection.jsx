import React from "react";

import css from "./MainSection.module.css";
import TitleSection from "../TitleSection/TitleSection";
import Service from "../Service/Service";
import { useMediaQuery } from "react-responsive";
const MainSection = () => {
  const isRetina = useMediaQuery({ query: "(min-device-pixel-ratio: 2)" });

  const getBackgroundImage = () => {
    
  }
  return (
    <div className={css.container}>
      <TitleSection title1="Zakres usług" title2="Zadbaj o siebie" />
      <ul className={css.cards}>
        <li className={css.card}>
          <Service
            title={"Modelowanie"}
            backgroundImage={getBackgroundImage("modeling")}
          />
        </li>
        <li className={css.card}>
          <Service title={"Pielęgnacja Twarzy"} />
        </li>
        <li className={css.card}>
          <Service title={"Stylizacja Paznokci"} />
        </li>
        <li className={css.card}>
          <Service title={"Stylizacja Rzęs"} />
        </li>
        <li className={css.card}>
          <Service title={"Laminacja"} />
        </li>
        <li className={css.card}>
          <Service title={"Stylizacja Brwi"} />
        </li>
        <li className={css.card}>
          <Service title={"Depilacja - Wosk"} />
        </li>
      </ul>
    </div>
  );
};

export default MainSection;
