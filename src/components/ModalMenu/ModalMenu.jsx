import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrWorkshop } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { GiFingernail } from "react-icons/gi";
import { RxBoxModel } from "react-icons/rx";
import { FaRegWindowClose } from "react-icons/fa";
import { IconContext } from "react-icons";
import PropTypes from "prop-types";

import css from "./ModalMenu.module.css";

const ModalMenu = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    onClose();
    navigate(path);
  };

  return (
    <div className={css.menuWrapper}>
      <div className={css.menu}>
        <div className={css.boxes}>
          <div className={css.row2}>
            <Link to="#" className={css.link} onClick={onClose}>
              <div className={css.box1}>
                <IconContext.Provider
                  value={{
                    color: "rgba(208, 169, 86, 1)",
                  }}
                >
                  <FaRegWindowClose />
                </IconContext.Provider>
                <p className={css.textLink}>Zamknij Menu</p>
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
                <p className={css.textLink}>Strona Główna</p>
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

                <p className={css.textLink}>O nas</p>
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
                <p className={css.textLink}>Portfolio</p>
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

                <p className={css.textLink}>Cennik</p>
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

                <p className={css.textLink}>Poznaj Zabiegi</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalMenu;
