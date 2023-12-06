import React from "react";
import { GiVibratingSmartphone } from "react-icons/gi";

import css from "./LastSection.module.css";
import Button from "../Button/Button";

const LastSection = () => {
  return (
    <section className={css.section__background}>
      <div className={`${css.container} ${css.headContent}`}>
        <div className={css.title}>
          <h2 className={css.titleSecond}>Oddaj się w dobre ręce</h2>

          <h2 className={css.titleFirst}>Masz pytania ?</h2>
          <h2 className={css.titleSecond}>Skontaktuj się z nami</h2>
          <Button
            text={" +48 666 589 222"}
            url={"tel:+48 666 589 222"}
            icon={<GiVibratingSmartphone />}
          />
        </div>
      </div>
    </section>
  );
};

export default LastSection;
