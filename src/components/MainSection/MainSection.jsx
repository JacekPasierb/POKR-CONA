import React from "react";
import main from "../../images/main.jpg";
import css from "./MainSection.module.css";
import TitleSection from "../TitleSection/TitleSection";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrVirtualMachine } from "react-icons/gr";
import { MdOutlineSentimentSatisfied } from "react-icons/md";

const MainSection = () => {
  return (
    <div className={css.mainSection}>
      <img src={main} className={css.picture} />
      <div className={css.boxes}>
        <div className={css.box}>
          <p className={css.title}>
            W naszym gabinecie oferujemy profesjonalne konsultacje, podczas
            których dokładnie analizujemy Twoje indywidualne potrzeby. Nasz
            doświadczony zespół specjalistów wspólnie z Tobą dobierze
            odpowiednie zabiegi, zapewniając kompleksową opiekę nad Twoim
            ciałem.
          </p>
          <div className={css.iconBox}>
            <p className={css.des}>PROFESJONALNE</p>
            <FaPeopleGroup
              style={{
                width: "80px",
                height: "80px",
                fill: " rgba(208, 169, 86, 1)",
              }}
            />
            <p className={css.des}>DORADZTWO</p>
          </div>
        </div>
        <div>
          <p className={css.title}>
            Specjalizujemy się w zaawansowanych technikach, takich jak
            kriolipoliza i endermologia, które są skierowane na poprawę kondycji
            ciała oraz zachowanie jego zdrowego wyglądu. Kriolipoliza to
            innowacyjna metoda redukcji tkanki tłuszczowej poprzez kontrolowane
            schładzanie obszarów problematycznych. Endermologia to zaawansowana
            technologia, która skupia się na ujędrnianiu skóry i redukcji
            cellulitu.
          </p>
          <div className={css.iconBox}>
            <p className={css.des}>NOWOCZESNA</p>
            <GrVirtualMachine
              style={{
                width: "80px",
                height: "80px",
                stroke: " rgba(208, 169, 86, 1)",
              }}
            />
            <p className={css.des}>TECHNOLOGIA</p>
          </div>
        </div>
        <div>
          <p className={css.title}>
            {" "}
            Zapraszamy Cię do skorzystania z naszych usług, aby doświadczyć
            profesjonalizmu i skuteczności naszych zabiegów kosmetycznych ciała.
            Nasz priorytet to Twoje zadowolenie i osiągnięcie zamierzonych
            rezultatów.
          </p>
          <div className={css.iconBox}>
            <p className={css.des}>100%</p>
            <MdOutlineSentimentSatisfied
              style={{
                width: "80px",
                height: "80px",
                fill: " rgba(208, 169, 86, 1)",
              }}
            />
            <p className={css.des}>SATYSFAKCJI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
