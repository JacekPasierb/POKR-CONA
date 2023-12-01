import React from 'react'
import css from "./PortfolioPage.module.css";
import  GalleryNais  from '../../components/GalleryNais/GalleryNais';
import TitleSection from "../../components/TitleSection/TitleSection";
import GalleryLash from '../../components/GalleryLash/GalleryLash';

const PortfolioPage = () => {
  return (
    <main className={`${css.container} ${css.gap}`}>
      <TitleSection title2={"Paznokcie Sara"} />
      <GalleryNais />
      <TitleSection title2={"Rzęsy"} />
      <GalleryLash/>
    </main>
  );
}

export default PortfolioPage