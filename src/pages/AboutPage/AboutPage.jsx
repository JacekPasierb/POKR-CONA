import React from "react";
import css from "./AboutPage.module.css";
import TitleSection from "../../components/TitleSection/TitleSection";
import DescriptionSection from "../../components/DescriptionSection/DescriptionSection";

const AboutPage = () => {
  return (
    <main className={`${css.container} ${css.gap}`}>
      <TitleSection
        title1={"Idea naszej Firmy "}
        title2={"ZADBAJ O SWÓJ WYGLĄD ORAZ ZDROWIE !"}
      />
      <DescriptionSection
        description={
          "Jesteśmy młodym i ambitnym zespołem, który specjalizuje się w modelowaniu sylwetki oraz stylizacją beauty. "
        }
      />
      <DescriptionSection
        description={
          "Założycielem naszej marki jest Karolina Żamojtel z pomocą narzeczonego Jakuba Pogrebniaka.  "
        }
      />
      <DescriptionSection
        description={
          "Salon kosmetyczny stworzyłam z myślą o osobach, które pragną dbać o swój piękny wygląd i zdrowie oraz przyjemnie spędzić czas. Moja praca jest moją pasją. Posiadam  doświadczenie zawodowe, które zdobyłam pracując w renomowanym gabinecie kosmetycznym w Hrubieszowie.  Moje kwalifikacje potwierdzają liczne certyfikaty oraz dyplomy specjalistyczne. Regularnie uczestniczę w sympozjach, targach, szkoleniach i wykładach podnoszących moje umiejętności.  "
        }
      />
      <DescriptionSection
        description={
          "Naszym priorytetem jest najwyższa jakość usług, doświadczenie oraz profesjonalizm. Dlatego skrupulatnie dobraliśmy naszych pracowników aby świadczyć jak najwyższą jakość usług w naszym salonie. Postanowiliśmy zainwestować w najnowocześniejszy sprzęt niedostępny w naszym regionie dający szybki i długotrwały  efekt w modelowaniu sylwetki. "
        }
      />
    </main>
  );
};

export default AboutPage;
