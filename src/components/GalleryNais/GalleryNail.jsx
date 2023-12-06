import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useMediaQuery } from "react-responsive";

import css from "./GalleryNail.module.css";
import imagesNail from "../../../data/imagesNail.json";

const GalleryNail = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) ",
  });

  const imagesFix = imagesNail.map((image) => ({
    original: isTablet
      ? image.original.replace(".webp", "Tablet.webp")
      : image.original,
    thumbnail: isTablet ? image.thumbnail : image.thumbnail,
  }));
  const renderCustomItem = (item) => {
    return (
      <img
        className="image-gallery-image"
        src={item.original}
        alt="Zdjęcie paznokci"
      />
    );
  };
  const renderCustomThumbInner = (item) => {
    return (
      <img
        className="image-gallery-thumbnail-image"
        src={item.thumbnail}
        alt="Miniatura zdjęcia paznokci"
      />
    );
  };
  const gallerySettings = {
    showThumbnails: true,
    showFullscreenButton: true,
    showPlayButton: true,
    items: imagesFix,
    thumbnailPosition: "right",
    slideInterval: 2000,
    loading: "lazy",
    thumbnailLoading: "lazy",
    lazyLoad: true,
    renderItem: renderCustomItem,
    renderThumbInner: renderCustomThumbInner,
  };
  return (
    <>
      <ImageGallery items={imagesFix} {...gallerySettings} />
    </>
  );
};

export default GalleryNail;
