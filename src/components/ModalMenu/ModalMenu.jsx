import { Link, useNavigate } from "react-router-dom";
import css from "./ModalMenu.module.css";

import React from "react";


const ModalMenu = ({onClose}) => {
  const navigate = useNavigate();

   const handleLinkClick = (path) => {
     onClose(); // Zamknięcie modala
     navigate(path); // Przekierowanie do nowej trasy
   };
  return (
    <div className={css.menuWrapper}>
      <div className={css.menu}>
        <nav className={css.navMenu}>
          <Link
            to="/"
            className={css.link}
            onClick={() => handleLinkClick("/")}
          >
            Strona Główna
          </Link>
          <Link
            to="/about"
            className={css.link}
            onClick={() => handleLinkClick("/about")}
          >
            O nas
          </Link>
          <Link
            to="/portfolio"
            className={css.link}
            onClick={() => handleLinkClick("/portfolio")}
          >
            Nasze Portfolio
          </Link>
          <Link
            to="/pricing"
            className={css.link}
            onClick={() => handleLinkClick("/pricing")}
          >
            Cennik
          </Link>
          <Link
            to="/procedures"
            className={css.link}
            onClick={() => handleLinkClick("/procedures")}
          >
            Poznaj Zabiegi
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default ModalMenu;
