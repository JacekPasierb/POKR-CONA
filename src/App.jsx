import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PricingPage from "./pages/PricingPage/PricingPage";
import ProceduresPage from "./pages/ProceduresPage/ProceduresPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

const App = () => {
  const [showModalWelcome, setShowModalWelcome] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setShowModalWelcome(true);
    }
    const timeoutId = setTimeout(() => {
      setShowModalWelcome(false);
    }, 30000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="styleSection">
      {showModalWelcome && <WelcomePage/>}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/procedures" element={<ProceduresPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
