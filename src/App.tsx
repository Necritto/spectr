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
import { SingleAreaPage } from "./pages/SingleAreaPage/SingleAreaPage";
import { SingleNewPage } from "./pages/SingleNewPage/SingleNewPage";
import { TeamPage } from "./pages/TeamPage/TeamPage";
import { debounce } from "./utils/helpers/debounce";
import { Context } from "./utils/context/context";
import {
  IAreasData,
  IMainData,
  IProductData,
  ISearchData,
  ITeamData,
  IAreaData,
  INavNodes,
  INewData,
} from "./utils/interfaces/interfaces";
import db from "./db/db.json";

const App = (): React.ReactElement => {
  const SWAP_HEADING: number = 980;
  const [windowWidth, setWindowWidth] = useState(0);

  const searchData: ISearchData = db.searchData;
  const productData: IProductData = db.productData;
  const areasData: ReadonlyArray<IAreasData> = db.areasData;
  const mainData: IMainData = db.mainData;
  const teamData: ReadonlyArray<ITeamData> = db.teamData;
  const areaData: IAreaData = db.areaData;
  const navData: INavNodes = db.navBarData;
  const burgerNavData: INavNodes = db.burgerNavData;
  const newData: INewData = db.newData;

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
      <Route path="/" exact render={() => <MainPage mainData={mainData} />} />
      <Route
        path="/products"
        exact
        render={() => <ProductPage productsData={mainData.carouselData} />}
      />
      <Route
        path="/areas"
        exact
        render={() => <AreasPage areasData={areasData} />}
      />
      <Route
        path="/news"
        exact
        render={() => <NewsPage newsData={mainData.newsData} />}
      />
      <Route
        path="/search"
        exact
        render={() => <SearchResultsPage searchData={searchData} />}
      />
      <Route
        path="/products/:product"
        render={() => <SingleProductPage productData={productData} />}
      />
      <Route
        path="/areas/:area"
        render={() => <SingleAreaPage areaData={areaData} />}
      />
      <Route
        path="/news/:id"
        exact
        render={() => <SingleNewPage newData={newData} />}
      />
      <Route
        path="/team"
        exact
        render={() => <TeamPage teamData={teamData} />}
      />
      <Route path="/contacts" exact render={() => <ContactsPage />} />
      <Route path="/404" render={() => <NotFound />} />
      <Redirect to="/404" />
    </Switch>
  );

  return (
    <Context.Provider value={{ SWAP_HEADING, windowWidth }}>
      <Layout navData={navData} burgerNavData={burgerNavData}>
        {routes}
      </Layout>
    </Context.Provider>
  );
};

export default App;
