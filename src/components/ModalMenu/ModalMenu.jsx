import { Link, useNavigate } from "react-router-dom";
import css from "./ModalMenu.module.css";
import { GrWorkshop } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { GiFingernail } from "react-icons/gi";
import { RxBoxModel } from "react-icons/rx";
import { FaRegWindowClose } from "react-icons/fa";

import React from "react";
import { IconContext } from "react-icons";

const ModalMenu = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    onClose(); // Zamknięcie modala
    navigate(path); // Przekierowanie do nowej trasy
  };
  return (
    <div className={css.menuWrapper}>
      <div className={css.menu}>
        <div className={css.boxes}>
          <div className={css.row2}>
            <Link
              to="#"
              className={css.link}
              onClick={onClose}
            >
              <div className={css.box1}>
                <IconContext.Provider
                  value={{
                    color: "rgba(208, 169, 86, 1)",
                  }}
                >
                  <FaRegWindowClose />
                </IconContext.Provider>
                <p>Zamknij Menu</p>
              </div>
            </Link>
          </div>
          <div className={css.row1}>
            <Link
              to="/"
              className={css.link}
              onClick={() => handleLinkClick("/")}
            >
              <div className={css.box1}>
                <IconContext.Provider
                  value={{
                    color: "rgba(208, 169, 86, 1)",
                  }}
                >
                  <IoHomeOutline />
                </IconContext.Provider>
                <p>Strona Główna</p>
              </div>
            </Link>
            <Link
              to="/about"
              className={css.link}
              onClick={() => handleLinkClick("/about")}
            >
              <div className={css.box2}>
                <IconContext.Provider
                  value={{
                    color: "rgba(208, 169, 86, 1)",
                  }}
                >
                  <SiAboutdotme />
                </IconContext.Provider>

                <p>O nas</p>
              </div>
            </Link>
          </div>
          <div className={css.row2}>
            {" "}
            <Link
              to="/portfolio"
              className={css.link}
              onClick={() => handleLinkClick("/portfolio")}
            >
              <div className={css.box1}>
                <IconContext.Provider
                  value={{
                    color: "rgba(208, 169, 86, 1)",
                  }}
                >
                  <GrWorkshop />
                </IconContext.Provider>
                <p>Portfolio</p>
              </div>
            </Link>
            <Link
              to="/pricing"
              className={css.link}
              onClick={() => handleLinkClick("/pricing")}
            >
              <div className={css.box2}>
                <IconContext.Provider
                  value={{
                    color: "rgba(208, 169, 86, 1)",
                  }}
                >
                  <GiFingernail />
                </IconContext.Provider>

                <p>Cennik</p>
              </div>
            </Link>
          </div>
          <div className={css.row2}>
            {" "}
            <Link
              to="/procedures"
              className={css.link}
              onClick={() => handleLinkClick("/procedures")}
            >
              <div className={css.box1}>
                <IconContext.Provider
                  value={{
                    color: "rgba(208, 169, 86, 1)",
                  }}
                >
                  <RxBoxModel />
                </IconContext.Provider>

                <p>Poznaj Zabiegi</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;

//  <nav className={css.navMenu}>
//           <Link
//             to="/"
//             className={css.link}
//             onClick={() => handleLinkClick("/")}
//           >
//             Strona Główna
//           </Link>
//           <Link
//             to="/about"
//             className={css.link}
//             onClick={() => handleLinkClick("/about")}
//           >
//             O nas
//           </Link>
//           <Link
//             to="/portfolio"
//             className={css.link}
//             onClick={() => handleLinkClick("/portfolio")}
//           >
//             Nasze Portfolio
//           </Link>
//           <Link
//             to="/pricing"
//             className={css.link}
//             onClick={() => handleLinkClick("/pricing")}
//           >
//             Cennik
//           </Link>
//           <Link
//             to="/procedures"
//             className={css.link}
//             onClick={() => handleLinkClick("/procedures")}
//           >
//             Poznaj Zabiegi
//           </Link>
//         </nav>
