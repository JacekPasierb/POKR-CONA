import React from "react";
import { useState } from "react";

import css from "./Footer.module.css";
import Line from "../Line/Line";
import sprite from "../../images/icons/sprite.svg";
import PolicyModal from "../PolicyModal/PolicyModal";

const Footer = () => {
  const [isOpenPolicyModal, setIsOpenPolicyModal] = useState(false);
  const handlePolicyModal = () => {
    setIsOpenPolicyModal(true);
  };

  const handlePolicyModalClose = () => {
    setIsOpenPolicyModal(false);
  };

  return (
    <footer className={css.footer}>
      <div className={`${css.container} ${css.gap}`}>
        <div className={css.footerBoxes}>
          <div className={css.footerBox}>
            <h4 className={css.footerBox__title}>"Pokręcona"</h4>
            <h5 className={css.footerBox__title}>Karolina Żamojtel</h5>
            <p className={css.footerBox__description}>ul. Partyzantów 31</p>
            <p className={css.footerBox__description}>22-500 Hrubieszów</p>
          </div>
          <div className={css.footerBox}>
            <h4 className={css.footerBox__title}>Kontakt</h4>
            <p className={css.footerBox__description}>
              <b>Telefon:</b>
            </p>

            <p className={css.footerBox__description}>(+48) 666 589 222</p>
            <p className={css.footerBox__description}>
              <b>E-mail:</b>
            </p>
            <p className={css.footerBox__description}>
              pokreconastylistka@gmail.com
            </p>
          </div>
          <div className={css.footerBox}>
            <h4 className={css.footerBox__title}>Zapraszamy</h4>

            <p className={css.footerBox__description}>
              <b>Wtorek - Piątek:</b>
            </p>
            <p className={css.footerBox__description}>9:00 - 17:00</p>
            <p className={css.footerBox__description}>
              <b>Sobota:</b>
            </p>
            <p className={css.footerBox__description}> 8:00 - 14:00</p>
            <p className={css.footerBox__description}>
              <b>Niedziela - Poniedziałek:</b>
            </p>
            <p className={css.footerBox__description}> Zamknięte </p>
          </div>
        </div>
        <Line color={`rgba(0, 0, 0, 50%) `} />
        <div className={css.footerSocial}>
          <h4 className={css.footerBox__title}> Śledź nas w sieci</h4>
          <div className={css.footerBox__icons}>
            <a
              href="https://www.facebook.com/profile.php?id=100095404849968"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg className={`${css.icon} ${css.fb}`}>
                <use href={sprite + `#icon-Facebook`}></use>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/pokrecona_karolina_zamojtel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg className={`${css.icon} ${css.insta}`}>
                <use href={sprite + `#icon-Instagram`}></use>
              </svg>
            </a>{" "}
            <a
              href="https://booksy.com/pl-pl/175350_pokrecona_salon-kosmetyczny_7750_hrubieszow?do=invite#ba_s=dl_1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Booksy"
            >
              <svg className={`${css.icon} ${css.booksy}`}>
                <use href={sprite + `#icon-booksy-seeklogocom`}></use>
              </svg>
            </a>
          </div>
        </div>
        <Line color={`rgba(0, 0, 0, 50%) `} />
        <div className={css.footerRights}>
          <p>
            © "Pokręcona" Karolina Żamojtel 2023 Wszelkie prawa zastrzeżone.
            Stronę wraz z projektem opracował:{" "}
            <a
              href="https://www.linkedin.com/in/jacek-pasierb"
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              Jacek Pasierb
            </a>
          </p>
          <p onClick={handlePolicyModal} className={css.link}>
            Polityka Prywatności i Plików Cookies
          </p>
          {isOpenPolicyModal && (
            <PolicyModal onClose={handlePolicyModalClose} />
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
