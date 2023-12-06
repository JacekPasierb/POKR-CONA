import React from "react";

import css from "./PortfolioPage.module.css";
import TitleSection from "../../components/TitleSection/TitleSection";
import GalleryLash from "../../components/GalleryLash/GalleryLash";
import GalleryNail from "../../components/GalleryNais/GalleryNail";

const PortfolioPage = () => {
  return (
    <main className={`${css.container} ${css.gap}`}>
      <TitleSection
        title1={
          "Zanurz się w świecie kreatywności i piękna razem z nami. Sprawdź nasze portfolio i skorzystaj z naszych usług już dziś."
        }
      />
      <TitleSection
        title1={"Stylistka Sara i Karolina"}
        title2={"Stylizacje Paznokci"}
      />
      <GalleryNail />
      <TitleSection
        title1={"Stylistka Aleksandra"}
        title2={"Stylizacje Rzęs"}
      />
      <GalleryLash />
    </main>
  );
};

export default PortfolioPage;
