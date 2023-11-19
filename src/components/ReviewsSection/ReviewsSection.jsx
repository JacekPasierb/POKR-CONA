import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import css from "./ReviewsSection.module.css";
import sprite from "../../images/icons/sprite.svg";

const ReviewsSection = () => {
  return (
    <div>
      <TitleSection title1="Opinie Klientów" title2="Tak o nas piszą" />
      <div className={css.reviewBox}>
        <div className={css.line}></div>
        <div>
          <svg className={css.icon}>
            <use href={sprite + `#icon-Heart`}></use>
          </svg>
          <svg className={css.icon}>
            <use href={sprite + `#icon-Heart`}></use>
          </svg>
          <svg className={css.icon}>
            <use href={sprite + `#icon-Heart`}></use>
          </svg>
          <svg className={css.icon}>
            <use href={sprite + `#icon-Heart`}></use>
          </svg>
          <svg className={css.icon}>
            <use href={sprite + `#icon-Heart`}></use>
          </svg>
        </div>
        <p className={css.reviewOpinion}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus.
        </p>
        <div className={css.reviewTitle}>
          <p className={css.reviewAuthor}>Marlena Ł.</p>
          <p className={css.reviewData}>8.11.2023</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
