import React from 'react';
import { Route, Routes } from 'react-router';
import "./App.css";
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import PricingPage from './pages/PricingPage/PricingPage';
import ProceduresPage from './pages/ProceduresPage/ProceduresPage';

const App = () => {
  return (
    <div className="styleSection">
      <Header/>
      <Routes>
        <Route path='/' element={ <HomePage/>} />
        <Route path='/about' element={ <AboutPage/>} />
        <Route path='/portfolio' element={ <PortfolioPage/>} />
        <Route path='/pricing' element={ <PricingPage/>} />
        <Route path='/procedures' element={ <ProceduresPage/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App