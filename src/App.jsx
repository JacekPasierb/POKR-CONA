import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";

import PricingPage from "./pages/PricingPage/PricingPage";
import ProceduresPage from "./pages/ProceduresPage/ProceduresPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

import DashboardPage from "./pages/DashboardPage/DashboardPage";

const App = () => {
  const [showModalWelcome, setShowModalWelcome] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setShowModalWelcome(true);
    }
    const timeoutId = setTimeout(() => {
      setShowModalWelcome(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Routes>
        <Route element={showModalWelcome ? <WelcomePage/> : <DashboardPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/procedures" element={<ProceduresPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;

//  <div className="styleSection">
//    {showModalWelcome && <WelcomePage />}
//    {!showModalWelcome && (
//      <>
//        <Header />
//        <Routes>
//          <Route path="/" element={<HomePage />} />
//          <Route path="/about" element={<AboutPage />} />
//          <Route path="/portfolio" element={<PortfolioPage />} />
//          <Route path="/pricing" element={<PricingPage />} />
//          <Route path="/procedures" element={<ProceduresPage />} />
//          <Route path="*" element={<NotFoundPage />} />
//        </Routes>
//        <LastSection />
//        <Footer />
//      </>
//    )}
//  </div>;
