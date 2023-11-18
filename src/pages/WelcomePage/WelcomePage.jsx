import React, { useEffect, useState } from "react";
import css from "./WelcomePage.module.css";



import TitleSection from "../../components/TitleSection/TitleSection";
import { useMediaQuery } from "react-responsive";

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
        }
        loadBackground();

    },[getBackgroundImage()])
  return (
    <div className={css.welcomePage}>
      <img src={background} />
      <TitleSection
        title1={"Karolina Żamojtel"}
        title2={"Gabinet Kosmetyczny"}
      />
    </div>
  );
};

export default WelcomePage;
