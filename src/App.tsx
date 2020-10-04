import React, { useState, useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { Layout } from "./hoc/Layout/Layout";
import { AreasPage } from "./pages/AreasPage/AreasPage";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { NotFound } from "./pages/NotFound/NotFound";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { SearchResultsPage } from "./pages/SearchResultsPage/SearchResultsPage";
import { SingleProductPage } from "./pages/SingleProductPage/SingleProductPage";
import { TeamPage } from "./pages/TeamPage/TeamPage";
import { debounce } from "./utils/helpers/debounce";

export interface ISwapHeading {
  SWAP_HEADING: number;
  windowWidth: number;
}

export interface ISearchData {
  products: Array<ProductsData>;
  areas: Array<AreasData>;
  news: Array<NewsData>;
}

type ProductsData = {
  id: number;
  imgUrl: string;
  title: string;
  descr: string;
};

type AreasData = {
  id: number;
  route: string;
  title: string;
};

type NewsData = {
  id: number;
  imgUrl: string;
  title: string;
  date: string;
};

const App = (): React.ReactElement => {
  const SWAP_HEADING: number = 980;
  const [windowWidth, setWindowWidth] = useState(0);
  const searchData: ISearchData = {
    products: [
      {
        id: 1,
        imgUrl: "img/cardImg/img1.png",
        title: "L405",
        descr: "Спектрометр комбинационного рассеяния",
      },
      {
        id: 2,
        imgUrl: "img/cardImg/img2.png",
        title: "R1064",
        descr: "Оптоволоконный UV-VIS-NIR спектрометр",
      },
      {
        id: 3,
        imgUrl: "img/cardImg/img3.png",
        title: "M532",
        descr: "Микроскоп комбинационного рассеяния (Раман)",
      },
      {
        id: 4,
        imgUrl: "img/cardImg/img4.png",
        title: "L365",
        descr: "Люминесцентный спектрометр",
      },
    ],
    areas: [
      {
        id: Math.random(),
        route: "biotech",
        title: "Биотехнологии",
      },
      {
        id: Math.random(),
        route: "lowkp",
        title: "Низкочастотная КР-спектроскопия",
      },
    ],
    news: [
      {
        id: 1,
        imgUrl: "img/newsImg/img1.png",
        date: "22.06.2015",
        title: "ИнСпектр на ICAVS 8 2015, Австрия, Вена",
      },
      {
        id: 2,
        imgUrl: "img/newsImg/img2.png",
        date: "19.03.2015",
        title: "XYZ Раман-система для сканирования порошков",
      },
    ],
  };

  useEffect(() => {
    const handleResize = debounce(() => setWindowWidth(window.innerWidth), 200);
    window.addEventListener("DOMContentLoaded", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("DOMContentLoaded", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const routes: React.ReactElement = (
    <Switch>
      <Route
        path="/main"
        exact
        render={() => (
          <MainPage SWAP_HEADING={SWAP_HEADING} windowWidth={windowWidth} />
        )}
      />
      <Route
        path="/products"
        exact
        render={() => (
          <ProductPage SWAP_HEADING={SWAP_HEADING} windowWidth={windowWidth} />
        )}
      />
      <Route
        path="/areas"
        exact
        render={() => (
          <AreasPage SWAP_HEADING={SWAP_HEADING} windowWidth={windowWidth} />
        )}
      />
      <Route
        path="/news"
        exact
        render={() => (
          <NewsPage SWAP_HEADING={SWAP_HEADING} windowWidth={windowWidth} />
        )}
      />
      <Route
        path="/team"
        exact
        render={() => (
          <TeamPage SWAP_HEADING={SWAP_HEADING} windowWidth={windowWidth} />
        )}
      />
      <Route
        path="/contacts"
        exact
        render={() => (
          <ContactsPage SWAP_HEADING={SWAP_HEADING} windowWidth={windowWidth} />
        )}
      />
      <Route
        path="/search"
        exact
        render={() => (
          <SearchResultsPage
            SWAP_HEADING={SWAP_HEADING}
            windowWidth={windowWidth}
            searchData={searchData}
          />
        )}
      />
      <Route
        path="/products/:product"
        render={() => (
          <SingleProductPage
            SWAP_HEADING={SWAP_HEADING}
            windowWidth={windowWidth}
          />
        )}
      />
      <Route
        path="/404"
        render={() => (
          <NotFound SWAP_HEADING={SWAP_HEADING} windowWidth={windowWidth} />
        )}
      />
      <Redirect to="/404" />
    </Switch>
  );

  return (
    <Layout SWAP_HEADING={SWAP_HEADING} windowWidth={windowWidth}>
      {routes}
    </Layout>
  );
};

export default App;
