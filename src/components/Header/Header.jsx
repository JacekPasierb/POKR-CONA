import React from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router";

import css from "./Header.module.css";
import NavBarMobile from "../NavBar/NavBarMobile";
import NavBarDesctop from "../NavBar/NavBarDesctop";

const Header = () => {
  const isMobile = useMediaQuery({ query: `(min-width: 768px)` });
  const location = useLocation();
  const { pathname } = location;

  return (
    <header
      className={`${pathname === "/" && css.head__background} ${
        pathname === "/about" && css.headAbout__background
      } ${pathname === "/portfolio" && css.head__background}  ${
        pathname === "/pricing" && css.head__background
      } ${pathname === "/procedures" && css.head__background}`}
    >
      <div className={`${css.container} ${css.headContent}`}>
        {!isMobile ? <NavBarMobile /> : <NavBarDesctop />}

        <div className={css.title}>
          <h1 className={css.titleSecond}>Karolina Żamojtel</h1>

          <h2 className={css.titleFirst}>Gabinet Kosmetyczny</h2>
        </div>
        <div className={css.headerContact}>
          <p className={css.headerContact__text}>
            ul. partyzantów 31, 22-500 Hrubieszów
          </p>
          <p className={css.headerContact__text}>+48 666 589 222</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
