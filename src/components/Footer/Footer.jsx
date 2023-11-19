import React from "react";
import css from "./Footer.module.css";
import Line from "../Line/Line";
import sprite from "../../images/icons/sprite.svg";

const Footer = () => {
  return (
    <div className={css.container}>
      <div className={css.boxes}>
        <div className={css.box}>
          <h4>"Pokręcona"</h4>
          <h4>Karolina Żamojtel</h4>
          <p>ul. Partyzantów 31</p>
          <p>22-500 Hrubieszów</p>
        </div>
        <div className={css.box}>
          <h4>Zapraszamy</h4>

          <p>Pn - Pt: 9:00 - 17:00</p>
          <p>Sobota: 8:00 - 14:00</p>
          <p>Niedziela: Zamknięte </p>
        </div>
        <div className={css.box}>
          {" "}
          <h4>Konatkt</h4>
          <p>Telefon: +48 666 589 222</p>
          <p>E-mail: </p>
        </div>
      </div>
      <Line color={`rgba(0, 0, 0, 50%) `} />
      <div>
        {" "}
        <svg className={css.icon}>
          <use href={sprite + `#icon-Heart`}></use>
        </svg>
      </div>
      <Line color={`rgba(0, 0, 0, 50%) `} />
      <div>
        <p>
          © "Pokręcona" Karolina Żamojtel Sp. z o. o. 2023 Wszelkie prawa
          zastrzeżone. Stronę wraz z projektem opracował: Jacek Pasierb
        </p>
      </div>
    </div>
  );
};

export default Footer;
