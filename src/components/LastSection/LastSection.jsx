import React from "react";

import css from "./LastSection.module.css";

const LastSection = () => {
  return (
    <section className={css.section__background}>
      <div className={`${css.container} ${css.headContent}`}>
        <div className={css.title}>
          <h2 className={css.titleSecond}>Oddaj się w dobre ręce</h2>

          <h2 className={css.titleFirst}>Masz pytania ?</h2>
          <h2 className={css.titleSecond}>Skontaktuj się z nami</h2>
          <button type="button" className={css.button}>
            +48 666 589 222
          </button>
        </div>
      </div>
    </section>
  );
};

export default LastSection;
