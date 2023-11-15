import React from "react";
import { useMediaQuery } from "react-responsive";

import Header from "../../components/Header/Header";

const HomePage = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  return (
    <>
      <Header />
      {/* <Main /> */}
      {/* <div className={css.line}></div>
          <Opinie />
          <div className={css.line}></div>
          <LastSection />
          <Footer /> */}
    </>
  );
};

export default HomePage;
