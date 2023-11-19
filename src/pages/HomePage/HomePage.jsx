import React from "react";
import MainSection from "../../components/MainSection/MainSection";
import Line from "../../components/Line/Line";
import css from "./HomePage.module.css";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";

const HomePage = () => {
  return (
    <div className={`${css.container} ${css.gap}`}>
      <MainSection /> <Line color={`rgba(0, 0, 0, 50%) `} /><ReviewsSection/>
    </div>
  );
};

export default HomePage;
