import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import css from "./NavBarDesctop.module.css";
import logoDesctop from "../../images/LogoLaptop.png";

const NavBarDesctop = () => {
  return (
    <div>
      <div className={css.wrapper}>
        <img className={css.logo} src={logoDesctop} alt="logoPokręcona" />
        <nav className={css.navMenu}>
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
        <button type="button" className={css.button}>Rezerwuj wizytę</button>
      </div>
      <div className={css.line}></div>
    </div>
  );
};

export default NavBarDesctop;
