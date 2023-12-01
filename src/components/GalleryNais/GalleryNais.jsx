import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useMediaQuery } from "react-responsive";
import imagesPaznokcie from "../../../data/images.json";
import css from "./GalleryNais.module.css";

const GalleryNais = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) ",
  });

  const imagesFix = imagesPaznokcie.map((image) => ({
    original: isTablet
      ? image.original.replace(".webp", "Tablet.webp")
      : image.original.replace(".webp", "Mobile.webp"),
    thumbnail: isTablet
      ? image.thumbnail.replace(".webp", "Tablet.webp")
      : image.thumbnail,
    // originalClass: isTablet ? css.imageWidthTablet : css.imageWidth,
  }));
  const gallerySettings = {
    showThumbnails: true,
    showFullscreenButton: true,
    showPlayButton: true,
    items: imagesFix,
    thumbnailPosition: "right",
    slideInterval: 2000,
  };
  return (
    <>
      <ImageGallery items={imagesFix} {...gallerySettings} />
    </>
  );
};

export default GalleryNais;
