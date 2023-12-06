import React from "react";

import css from "./PricingPage.module.css";
import BoxServices from "../../components/Modeling/BoxServices";

const PricingPage = () => {
  return (
    <main className={`${css.container} ${css.gap}`}>
      <BoxServices />
    </main>
  );
};

export default PricingPage;
