import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import css from "./NavBarTablet.module.css";
import logo from "../../images/LogoMobile.png";

const NavBarTablet = () => {
  return (
    <>
      <div className={css.wrapper}>
        <img className={css.logo} src={logo} alt="logoPokręcona" />
        <nav>
          <NavLink to="/" className={css.link}>
            Strona Główna
          </NavLink>
          <NavLink to="/about" className={css.link}>
            O Nas
          </NavLink>
          <NavLink to="/portfolio" className={css.link}>
            Nasze Portfolio
          </NavLink>
          <NavLink to="/pricing" className={css.link}>
            Cennik
          </NavLink>
          <NavLink to="/procedures" className={css.link}>
            Poznaj Zabiegi
          </NavLink>
        </nav>
        <button type="button">Rezerwuj wizytę</button>
      </div>
      <div className={css.line}></div>
    </>
  );
};

export default NavBarTablet;
