import React from "react";
import css from "./PricingPage.module.css";
import Modeling from "../../components/Modeling/Modeling";
import FaceFacial from "../../components/FaceFacial/FaceFacial";

const PricingPage = () => {
  return (
    <main className={`${css.container} ${css.gap}`}>
      <Modeling />
      <FaceFacial />
    </main>
  );
};

export default PricingPage;
