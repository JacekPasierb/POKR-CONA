import React from "react";
import { useMediaQuery } from "react-responsive";

import css from "./Header.module.css";
import NavBarMobile from "../NavBar/NavBarMobile";
import NavBarTablet from "../NavBar/NavBarTablet";

const Header = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const isTablet = useMediaQuery({query: `(min-width: 768px) and (max-width: 1200px)`})
  return (
    <header className={css.head__background}>
      <div className={css.container}>
        {isMobile && <NavBarMobile />}
        {isTablet && <NavBarTablet/>}
        <span className={css.title}>
          <p className={css.titleSecond}>Karolina Żamojtel</p>
          <h1 className={css.titleFirst}>Gabinet Kosmetyczny</h1>
        </span>
      </div>
    </header>
  );
};

export default Header;
