# Dokumentacja Projektu Strony "https://pokręcona.pl"

## Opis Projektu

"https://pokręcona.pl" - strona internetowa reprezentująca Gabinet Kosmetyczny Pokręcona Karolina Żamojtel, 
oferujący zabiegi upiększające ciało i twarz, endermologia, kriolipoliza oraz stylizacje paznokci, rzęs brwi itp.
Projekt jest napisany w React i skonfigurowany przy użyciu Vite.
Nie korzysta obecnie z bazy danych, a dane są przechowywane do odczytu w plikach JSON w folderze "data".

## Struktura Projektu

"https://pokręcona.pl"

|--data/
  ||--nails.json
  ||--lashes.json
  ||--prices.json
  ||--reviews.json
|--public/
|--src/
  ||--components
  ||--images
  ||--pages
  ||--stylesheet
  ||--utils
  ||--app.jsx
  ||--main.jsx
|--index.html

## Strony i Komponenty

- **`main.jsx`**: Plik główny, zawiera konfiguracje i punkt wejściowy dla aplikacji.

- **`app.jsx`**: Plik główny, zawiera konfiguracje routingu.

- **Komponenty Strony**:
  -`DashboardPage`
  -`HomePage`
  -`NotFoundPage`
  -`OurPage`
  -`AboutPage`
  -`PortfolioPage`
  -`PrincingPage`
  -`ProcedruesPage`
  -`WelcomePage` 

- **Komponenty Layout na stronie Dashboard**:
  -`Header`
  -`Outlet`: Komponent wyświetla zależnie od routingu: HomePage, AboutPage, PortfolioPage, PricingPage, ProceduresPage.
  -`LastSection`
  -`Footer`

- **Komponenty Sekcji na stronie HomePage**:
  -`MainSection`
  -`Line`
  -`ServicesSection`
  -`Line`
  -`ReviewsSection`
  -`Line`

- **Komponenty Sekcji na stronie AboutPage**:

- **Komponenty Sekcji na stronie PortfolioPage**:
  -`TitleSection`
  -`TitleSection`
  -`GalleryNail`
  -`TitleSection`
  -`GalleryLash`

- **Komponenty Sekcji na stronie PricingPage**:
  -`BoxServices`
  

## Struktura elementów
- **`components/`**: Folder zawierający komponenty używane na stronie.
- **`images/`**: Folder zawierający obrazy, takie jak ikony z wykorzystaniem sprite.svg oraz zdjęcia wykonanych paznokci rzęs itp.
- **`pages/`**: Folder zawierający komponenty stron serwisu.
- **`stylesheet/`**: Folder z plikiem variables.css zawierającym się stałe powtarzające zmienne css.

## Komponent WelcomePage

Modal powitalny pojawia się na stronie głównej przez pierwsze 3 sekundy od załadowania strony. Możesz dostosować jego ustawienia w pliku `App.js`.

`App.jsx`
**// Przykład dostosowania czasu widoczności modalu powitalnego do 5**

const [showModalWelcome, setShowModalWelcome] = useState(false);

useEffect(() => {
  if (pathname === "/") {
    setShowModalWelcome(true);
  }
  const timeoutId = setTimeout(() => {
    setShowModalWelcome(false);
  }, 5000); **// dostosuj tę wartość do pożądanego czasu widoczności modalu**
  return () => clearTimeout(timeoutId);
}, []);

## Komponent DashboardPage

DashboardPage jest główną widoczną stroną. Odpowiada za wyświetlanie nagłówka (`Header`), treści strony głównej (`Outlet`), oraz dwóch opóźnionych (lazy-loaded) komponentów: `LastSection` i `Footer`.

## Instalacja i Uruchomienie

1. Sklonuj repozytorium:

git clone https://github.com/JacekPasierb/POKR-CONA.git

2. Przejdź do katalogu projektu:

cd pokręcona.pl

3. Zainstaluj zależności:

npm install

4. Uruchom projekt w trybie deweloperskim:

npm run dev

## Kontakt:
W razie pytań lub sugestii, proszę o kontakt:
jack_byk@o2.pl