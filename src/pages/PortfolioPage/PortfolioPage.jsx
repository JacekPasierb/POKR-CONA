import React from 'react'
import css from "./PortfolioPage.module.css";

import TitleSection from "../../components/TitleSection/TitleSection";
import GalleryLash from '../../components/GalleryLash/GalleryLash';
import GalleryNail from '../../components/GalleryNais/GalleryNail';

const PortfolioPage = () => {
  return (
    <main className={`${css.container} ${css.gap}`}>
      <TitleSection title2={"Paznokcie Sara"} />
      <GalleryNail />
      <TitleSection title2={"Rzęsy Aleksandra"} />
      <GalleryLash/>
    </main>
  );
}

export default PortfolioPage