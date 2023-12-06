import React from "react";
import { useInView } from "react-intersection-observer";
import { IoReceiptOutline } from "react-icons/io5";

import css from "./ReviewsSection.module.css";
import TitleSection from "../TitleSection/TitleSection";
import sprite from "../../images/icons/sprite.svg";
import reviews from "../../../data/reviews";
import Button from "../Button/Button";

const ReviewsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${css.reviewSection} ${inView ? css.fadeIn : ""}`}
    >
      <TitleSection title1="Opinie Klientów" title2="Tak o nas piszą" />
      <ul className={css.reviewsBox}>
        {reviews.map((review) => (
          <li key={review.id} className={css.reviewBox}>
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
            <p className={css.reviewOpinion}>{review.opinion}</p>
            <div className={css.reviewTitle}>
              <p className={css.reviewAuthor}>{review.author}</p>
              <p className={css.reviewData}>{review.data}</p>
            </div>
          </li>
        ))}
      </ul>
      <Button
        text={" Poczytaj na Booksach"}
        url={
          "https://booksy.com/pl-pl/175350_pokrecona_salon-kosmetyczny_7750_hrubieszow?do=invite#ba_s=dl_1#reviews-section"
        }
        icon={<IoReceiptOutline />}
      />
    </div>
  );
};

export default ReviewsSection;
