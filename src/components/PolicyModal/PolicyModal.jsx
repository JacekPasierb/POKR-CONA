import React from "react";

import css from "./PolicyModal.module.css";

const PolicyModal = ({ onClose }) => {
  return (
    <div className={css.menuWrapper}>
      <div className={css.menu}>
        <div className={css.innerContainer}>
          <ul className={css.policyList}>
            <li>
              <p className={css.policyTitle}>
                Polityka Prywatności serwisu "Pokręcona" Karolina Żamojtel.
              </p>
            </li>
            <li>
              <p className={css.policyTitle}>www.pokręcona.pl</p>
            </li>
            <li>
              <p className={css.policyDescription}>
                Dziękujemy za odwiedzenie naszej strony internetowej. Niniejsza
                polityka opisuje, w jaki sposób zbieramy, używamy i chronimy
                informacje oraz informuje o korzystaniu z plików cookies.
              </p>
            </li>
            <li>
              <p className={css.policyTitle}>1. Zbieranie Informacji </p>
              <p className={css.policyDescription}>
                Nasza strona internetowa jest statyczna i nie zbiera żadnych
                danych osobowych. Nie korzystamy również z plików cookies w celu
                śledzenia działań użytkowników.
              </p>
            </li>
            <li>
              <p className={css.policyTitle}>
                2. Linki do Mediów Społecznościowych
              </p>
              <p className={css.policyDescription}>
                Nasza strona zawiera linki do mediów społecznościowych.
                Kliknięcie w te linki przenosi Cię na zewnętrzne witryny, które
                nie są zarządzane przez nas. Odesłania do mediów
                społecznościowych są jedynie linkami i nie zbieramy ani nie
                przechowujemy żadnych danych osobowych w związku z tym.
              </p>
            </li>
            <li>
              <p className={css.policyTitle}>3. Pliki Cookies</p>
              <p className={css.policyDescription}>
                Nie używamy plików cookies ani innych technologii śledzenia na
                naszej stronie internetowej. Nie zbieramy żadnych informacji
                osobistych ani śledzimy działań użytkowników.
              </p>
            </li>
            <li>
              <p className={css.policyTitle}>
                4. Zarządzanie ustawieniami plików cookies
              </p>
              <p className={css.policyDescription}>
                Ponieważ nie używamy plików cookies, nie ma potrzeby zarządzania
                nimi w ustawieniach przeglądarki.
              </p>
            </li>
            <li>
              <p className={css.policyTitle}>5. Kontakt</p>
              <p className={css.policyDescription}>
                Jeśli masz pytania dotyczące naszej polityki prywatności i
                plików cookies, skontaktuj się z nami pod adresem: Karolina
                Żamojtel "Pokręcona", Partyzantów 31, 22-500 Hrubieszów z
                wykorzystaniem następujących danych kontaktowych:
                pokreconastylistka@gmail.com.
              </p>
            </li>
            <li className={css.policyDescription}>
              Ostatnia aktualizacja: 29.11.2023r
            </li>
            <li onClick={onClose}>
              <p className={`${css.policyDescription} ${css.btn}`}>Zamknij</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
