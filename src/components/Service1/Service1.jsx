import React, { useEffect, useState } from 'react'
import css from "./Service1.module.css";

const Service1 = ({ title, backgroundImage }) => {
     const [background, setBackground] = useState("");
     useEffect(() => {
       const loadBackground = async () => {
         const backgroundPath = await backgroundImage;
         setBackground(backgroundPath);
       };

       loadBackground();
     }, [backgroundImage]);
  return (
    <>
      <img src={background} alt={title} />
      <p className={css.serviceBox__title}>{title}</p>
     
    </>
  );
}

export default Service1