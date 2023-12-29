import React from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router";

import sprite from "../../images/icons/sprite.svg";
import css from "./Header.module.css";
import NavBarMobile from "../NavBar/NavBarMobile";
import NavBarDesctop from "../NavBar/NavBarDesctop";
import Button from "../Button/Button";

const Header = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
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
        {isMobile ? <NavBarMobile /> : <NavBarDesctop />}

        <div className={css.title}>
          <h1 className={css.titleSecond}>Karolina Żamojtel</h1>

          <h2 className={css.titleFirst}>Gabinet Kosmetyczny</h2>
        </div>
        {isMobile && (
          <Button
            text={"Rezerwuj wizytę"}
            url={
              "https://booksy.com/pl-pl/175350_pokrecona_salon-kosmetyczny_7750_hrubieszow?do=invite#ba_s=dl_1"
            }
          />
        )}
        <div className={css.headerContact}>
          <div className={css.headerContact__call}>
            <svg className={`${css.icon}`}>
              <use href={sprite + `#icon-address-card-o`}></use>
            </svg>
            <p className={css.headerContact__text}>
              ul. partyzantów 31, 22-500 Hrubieszów
            </p>
          </div>
          <div className={css.headerContact__call}>
            <svg className={`${css.icon}`}>
              <use href={sprite + `#icon-phone`}></use>
            </svg>
            <a href="tel:+48666589222" className={css.headerContact__text}>
              +48 666 589 222
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
