import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useMediaQuery } from "react-responsive";
import imagesPaznokcie from "../../../data/images.json";

const GalleryNais = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1200px)",
  });

  const imagesMobile = [{}];
  const imagesDesctop = [{}];

  return (
    <>
      <p>Paznokcie Sary</p>
      <ImageGallery items={isTablet ? imagesDesctop : imagesMobile} />
    </>
  );
};

export default GalleryNais;
