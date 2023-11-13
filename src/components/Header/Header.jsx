import React from "react";
import css from "./Header.module.css";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header className={css.head__background}>
      <div className={css.container}>
        <NavBar />
        <h1>Gabinet Kosmetyczny</h1>
      </div>
    </header>
  );
};

export default Header;
