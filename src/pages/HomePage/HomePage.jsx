import React, { lazy, Suspense } from "react";

import css from "./HomePage.module.css";

const MainSection = lazy(() =>
  import("../../components/MainSection/MainSection")
);
const Line = lazy(() => import("../../components/Line/Line"));
const ReviewsSection = lazy(() =>
  import("../../components/ReviewsSection/ReviewsSection")
);

const HomePage = () => {
  return (
    <main className={`${css.container} ${css.gap}`}>
      <Suspense fallback={<div>Loading service... </div>}>
        <MainSection />{" "}
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
