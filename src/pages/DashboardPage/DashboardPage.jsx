import React, { Suspense, lazy } from "react";
import { Outlet } from "react-router";

import css from "./DashboardPage.module.css";
import Header from "../../components/Header/Header";

const LastSection = lazy(() =>
  import("../../components/LastSection/LastSection")
);
const Footer = lazy(() => import("../../components/Footer/Footer"));

const DashboardPage = () => {
  return (
    <div className={css.styleSection}>
      <Header />
      <Outlet />
      <Suspense fallback={<div>Loading lastSection... </div>}>
        <LastSection />
      </Suspense>
      <Suspense fallback={<div>Loading Footer... </div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
