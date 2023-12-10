import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { TfiClose } from "react-icons/tfi";
import { FaBars } from "react-icons/fa";

import css from "./NavBarMobile.module.css";
import logoMobile from "../../images/LogoMobile.png";
import logoTablet from "../../images/LogoTablet.png";
import logoLaptop from "../../images/LogoLaptop.png";
import ModalMenu from "../ModalMenu/ModalMenu";
import Line from "../Line/Line.jsx";

const NavBarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className={css.wrapper}>
        <img
          className={css.logo}
          src={logoLaptop}
          alt="logoPokręcona"
        />
        <button
          type="button"
          onClick={toggleMenu}
          className={css.buttonMenu}
          aria-label="Otwórz menu"
        >
          {showMenu ? (
            <TfiClose className={css.iconStyle} />
          ) : (
            <FaBars className={css.iconStyle} />
          )}
        </button>
      </div>
      <Line color={`rgba(255, 255, 255, 50%) `} />

      {showMenu ? <ModalMenu onClose={toggleMenu} /> : null}
    </div>
  );
};

export default NavBarMobile;
