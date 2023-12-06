import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import css from "./WelcomePage.module.css";

const WelcomePage = () => {
  const [background, setBackground] = useState("");

  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1200px)",
  });
  const isDesctop = useMediaQuery({ query: "(min-width: 1200px)" });

  const getBackgroundImage = async (titleImage) => {
    let imagePath = "";
    if (isMobile) {
      imagePath = await import(`../../images/${titleImage}Mobile1x.png`);
    } else if (isTablet) {
      imagePath = await import(`../../images/${titleImage}Tablet1x.png`);
    } else if (isDesctop) {
      imagePath = await import(`../../images/${titleImage}Desctop1x.png`);
    }
    if (isRetina) {
      if (imagePath.default) {
        imagePath = imagePath.default.replace("1x.png", "2x.png");
      } else {
        imagePath = imagePath.replace("1x.png", "2x.png");
      }
    }

    return imagePath.default || imagePath;
  };

  useEffect(() => {
    const loadBackground = async () => {
      const backgroundPath = await getBackgroundImage("LogoWelcome");
      setBackground(backgroundPath);
    };
    loadBackground();
  }, [isMobile, isTablet, isDesctop, isRetina]);
  return (
    <div className={`${css.welcomePage} `}>
      <div className={`${css.container}`}>
        <div className={css.content}>
          <img src={background} alt="Logo" className={css.logo} />
          <div className={css.title}>
            <h2 className={css.titleSecond}>Karolina Żamojtel</h2>

            <h2 className={css.titleFirst}>Gabinet Kosmetyczny</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
