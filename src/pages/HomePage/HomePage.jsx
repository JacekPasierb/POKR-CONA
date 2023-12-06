import React, { lazy, Suspense } from "react";

import css from "./HomePage.module.css";
import MainSection from "../../components/MainSection/MainSection";

const ServicesSection = lazy(() =>
  import("../../components/TestSection/TestSection")
);
const Line = lazy(() => import("../../components/Line/Line"));
const ReviewsSection = lazy(() =>
  import("../../components/ReviewsSection/ReviewsSection")
);

const HomePage = () => {
  return (
    <main className={`${css.container} ${css.gap}`}>
      <MainSection />
      <Suspense fallback={<div>Loading style... </div>}>
        <Line color={`rgba(0, 0, 0, 50%) `} />
      </Suspense>
      <Suspense fallback={<div>Loading service... </div>}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<div>Loading style... </div>}>
        <Line color={`rgba(0, 0, 0, 50%) `} />
      </Suspense>
      <Suspense fallback={<div>Loading reviews... </div>}>
        <ReviewsSection />
      </Suspense>
      <Suspense fallback={<div>Loading style... </div>}>
        <Line color={`rgba(0, 0, 0, 50%) `} />
      </Suspense>
    </main>
  );
};

export default HomePage;
