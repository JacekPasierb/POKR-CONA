import React from "react";

import css from "./ProceduresPage.module.css";
import DescriptionSection from "../../components/DescriptionSection/DescriptionSection";
import TitleSection from "../../components/TitleSection/TitleSection";

const ProceduresPage = () => {
  return (
    <main className={`${css.container} ${css.gap}`}>
      <TitleSection title2={"Zabiegi"}/>
      <div className={css.back}>
        <TitleSection
          title1={
            "Specjalizujemy się w najnowocześniejszych technikach modelowania sylwetki działających na najczęstsze problemy tj. tkanka tłuszczowa, cellulit, rozstępy, wiotka skóra, zmarszczki. Do tego wykorzystujemy zabiegi: "
          }
          title2={"ENDERMOLOGIA"}
        />
        <DescriptionSection
          description={
            "- Endermologia to ciśnieniowy, mechaniczny masaż oddziałujący głównie na tkankę łączną. Zabieg poprawia ukrwienie skóry oraz mikrocyrkulację płynów ustrojowych. Przyśpiesza procesy metaboliczne zachodzące w komórkach. Ujędrnia skórę i ułatwia spalanie tkanki tłuszczowej."
          }
        />
        <DescriptionSection
          description={
            "Endermologia szczególnie polecana jest do ujędrniania skóry, wzmocnienia tkanki łącznej, modelowania sylwetki oraz zmniejszania obwodów. Stymuluje usuwanie z organizmu toksyn i obocznych produktów przemiany materii, pobudza fibroblasty do produkcji kolagenu i elastyny."
          }
        />
        <TitleSection title2={"KRIOLIPOLIZA"} />
        <DescriptionSection
          description={
            "-Kriolipoliza jest to redukcja tkanki tłuszczowej za pomocą zamrażania wybranej partii ciała do -12 ℃, komórki tłuszczowe pod wpływem temperatury rozpadają się na mniejsze elementy i zostają trwałe usunięte z krwioobiegu.Kriolipoliza pozwala na usunięcie tkanki tłuszczowej z problematycznych miejsc, zmniejszenie obwodu ciała, odnowę komórkową i ujędrnienie skóry."
          }
        />
        <TitleSection title2={"EMS"} />
        <DescriptionSection
          description={
            "-EMS jest to zabieg wykorzystujący nieinwazyjną technologie skoncentrowanie falii elektromagnetycznej o wysokiej częstotliwości połączonej z technologią RF do intensywnego rozszerzenia i kurczenia się mięśni aby osiągnąć ekstremalny trening. Trening porównywalny jest do wykonania 25000 skurczów mięśni podczas jednego zabiegu."
          }
        />
        <DescriptionSection
          description={
            "Ems pozwala na redukcję tkanki tłuszczowej z wzmocnieniem i powiększeniem mięśni oraz jednoczesnym ujędrnianiem skóry."
          }
        />
      </div>
    </main>
  );
};

export default ProceduresPage;
