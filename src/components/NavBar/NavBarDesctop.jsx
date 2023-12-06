import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegHandshake } from "react-icons/fa";

import css from "./NavBarDesctop.module.css";
import logoDesctop from "../../images/LogoLaptop.png";
import Line from "../Line/Line";
import Button from "../Button/Button";

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
        <Button
          text={"Rezerwuj wizytę"}
          url={
            "https://booksy.com/pl-pl/175350_pokrecona_salon-kosmetyczny_7750_hrubieszow?do=invite#ba_s=dl_1"
          }
          icon={<FaRegHandshake />}
        />
      </div>
      <Line color={`rgba(255, 255, 255, 50%) `} />
    </div>
  );
};

export default NavBarDesctop;
