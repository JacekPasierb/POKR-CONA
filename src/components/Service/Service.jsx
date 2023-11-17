import React from 'react'

import css from "./Service.module.css";

const Service = ({ title }) => {
  return (
      <div className={css.serviceBox}><p className={css.choose}>SPRAWDŹ CENY</p><h5 className={css.serviceBox__title}>{title}</h5></div>
  )
}

export default Service