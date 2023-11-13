import React from "react";
import { NavLink } from "react-router-dom";

import css from "./NavBar.module.css";
import logo from "../../images/logo1xDesctop.png";
const menu = document.querySelector(".hamburger");


const NavBar = () => {
    
  return (
    <div className={css.navBar}>
      <img src={logo} alt="logo" />
      <button className={css.hamburger}>
        <span className={css.hamburger__container}>
          <span className={css.hamburger__bars}></span>
        </span>
      </button>
    </div>
  );
};

export default NavBar;
