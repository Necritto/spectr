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
import {
  IAreasData,
  IMainData,
  IProductData,
  ISearchData,
} from "./utils/interfaces/interfaces";
import db from "./db/db.json";

const App = (): React.ReactElement => {
  const SWAP_HEADING: number = 980;
  const [windowWidth, setWindowWidth] = useState(0);
  const searchData: ISearchData = db.searchData;
  const productData: IProductData = db.productData;
  const areasData: Array<IAreasData> = db.areasData;
  const mainData: IMainData = db.mainData;

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
          <MainPage
            SWAP_HEADING={SWAP_HEADING}
            windowWidth={windowWidth}
            mainData={mainData}
          />
        )}
      />
      <Route
        path="/products"
        exact
        render={() => (
          <ProductPage
            SWAP_HEADING={SWAP_HEADING}
            windowWidth={windowWidth}
            productsData={mainData.carouselData}
          />
        )}
      />
      <Route
        path="/areas"
        exact
        render={() => (
          <AreasPage
            SWAP_HEADING={SWAP_HEADING}
            windowWidth={windowWidth}
            areasData={areasData}
          />
        )}
      />
      <Route
        path="/news"
        exact
        render={() => (
          <NewsPage
            SWAP_HEADING={SWAP_HEADING}
            windowWidth={windowWidth}
            newsData={mainData.newsData}
          />
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
            productData={productData}
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
