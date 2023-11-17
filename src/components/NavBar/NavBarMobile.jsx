import React, { useState } from "react";
import css from "./NavBarMobile.module.css";

import logoMobile from "../../images/LogoMobile.png";
import logoTablet from "../../images/LogoTablet.png";
import { TfiClose } from "react-icons/tfi";
import { FaBars } from "react-icons/fa";
import ModalMenu from "../ModalMenu/ModalMenu";
import Line from "../Line/Line.jsx";
import { useMediaQuery } from "react-responsive";

const NavBarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className={css.wrapper}>
        <img className={css.logo} src={isMobile ? logoMobile : logoTablet} alt="logoPokręcona" />
        <button type="button" onClick={toggleMenu} className={css.buttonMenu}>
          {showMenu ? (
            <TfiClose className={css.iconStyle} />
          ) : (
            <FaBars className={css.iconStyle} />
          )}
        </button>
      </div>
      <Line color={`rgba(255, 255, 255, 50%) `} />
      
      {showMenu ? <ModalMenu /> : null}
    </div>
  );
};

export default NavBarMobile;
