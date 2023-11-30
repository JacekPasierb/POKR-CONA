import React from 'react'
import css from "./PortfolioPage.module.css";
import  GalleryNais  from '../../components/GalleryNais/GalleryNais';

const PortfolioPage = () => {
  return (
    <main className={`${css.container} ${css.gap}`}>
      <h3>ZAKŁADKA W BUDOWIE</h3>
      <GalleryNais/>
    </main>
  );
}

export default PortfolioPage