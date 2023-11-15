import React, { useState } from "react";
import css from "./NavBarMobile.module.css";

import logo from "../../images/LogoMobile.png";
import { TfiClose } from "react-icons/tfi";
import { FaBars } from "react-icons/fa";
import ModalMenu from "../ModalMenu/ModalMenu";

const NavBarMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className={css.wrapper}>
        <img className={css.logo} src={logo} alt="logoPokręcona" />
        <button type="button" onClick={toggleMenu} className={css.buttonMenu}>
          {showMenu ? (
            <TfiClose className={css.iconStyle} />
          ) : (
            <FaBars className={css.iconStyle} />
          )}
        </button>
      </div>
      <div className={css.line}></div>
      {showMenu ? <ModalMenu /> : null}
    </>
  );
};

export default NavBarMobile;
