import React, { lazy, Suspense } from "react";

import css from "./HomePage.module.css";

const TestSection = lazy(() =>
  import("../../components/TestSection/TestSection")
);
const Line = lazy(() => import("../../components/Line/Line"));
const ReviewsSection = lazy(() =>
  import("../../components/ReviewsSection/ReviewsSection")
);

const HomePage = () => {
  return (
    <main className={`${css.container} ${css.gap}`}>
      <Suspense fallback={<div>Loading service... </div>}>
        <TestSection />
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
