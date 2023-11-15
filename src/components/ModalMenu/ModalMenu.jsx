import { Link } from "react-router-dom";
import css from "./ModalMenu.module.css";

import React from "react";

const ModalMenu = () => {
  return (
    <div className={css.menuWrapper}>
      <div className={css.menu}>
        <nav className={css.navMenu}>
          <Link to="/">Strona Główna</Link>
          <Link to="/our">O nas</Link>
          <Link to="/np">Nasze Portfolio</Link>
          <Link to="/c">Cennik</Link>
          <Link to="/pz">Poznaj Zabiegi</Link>
        </nav>
      </div>
    </div>
  );
};

export default ModalMenu;
