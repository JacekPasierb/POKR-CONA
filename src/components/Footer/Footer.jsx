import React from "react";
import css from "./Footer.module.css";
import Line from "../Line/Line";
import sprite from "../../images/icons/sprite.svg";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`${css.container} ${css.gap}`}>
        <div className={css.footerBoxes}>
          <div className={css.footerBox}>
            <h4 className={css.footerBox__title}>"Pokręcona"</h4>
            <h4 className={css.footerBox__title}>Karolina Żamojtel</h4>
            <p className={css.footerBox__description}>ul. Partyzantów 31</p>
            <p className={css.footerBox__description}>22-500 Hrubieszów</p>
            <p className={css.footerBox__description}>
              Telefon: (+48) 666 589 222
            </p>
            <p className={css.footerBox__description}>
              E-mail: pokreconastylistka@gmail.com
            </p>
          </div>
          <div className={css.footerBox}>
            <h4 className={css.footerBox__title}>Zapraszamy</h4>

            <p className={css.footerBox__description}>Pn - Pt: 9:00 - 17:00</p>
            <p className={css.footerBox__description}>Sobota: 8:00 - 14:00</p>
            <p className={css.footerBox__description}>Niedziela: Zamknięte </p>
          </div>
        </div>
        <Line color={`rgba(0, 0, 0, 50%) `} />
        <div className={css.footerSocial}>
          <h4 className={css.footerBox__title}> Śledź nas w sieci</h4>
          <div className={css.footerBox__icons}>
            <svg className={`${css.icon} ${css.fb}`}>
              <use href={sprite + `#icon-Facebook`}></use>
            </svg>
            <svg className={`${css.icon} ${css.insta}`}>
              <use href={sprite + `#icon-Instagram`}></use>
            </svg>
            <svg className={`${css.icon} ${css.booksy}`}>
              <use href={sprite + `#icon-booksy-seeklogocom`}></use>
            </svg>
          </div>
        </div>
        <Line color={`rgba(0, 0, 0, 50%) `} />
        <div className={css.footerRights}>
          <p>
            © "Pokręcona" Karolina Żamojtel Sp. z o. o. 2023 Wszelkie prawa
            zastrzeżone. Stronę wraz z projektem opracował: Jacek Pasierb
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
