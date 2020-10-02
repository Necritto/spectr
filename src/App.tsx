import React, { useState, useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { Layout } from "./hoc/Layout";
import { MainPage } from "./pages/MainPage/MainPage";
import { NotFound } from "./pages/NotFound/NotFound";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { debounce } from "./utils/helpers/debounce";

export interface ISwapHeading {
  SWAP_HEADING: number;
  windowWidth: number;
}

const App = () => {
  const SWAP_HEADING: number = 980;
  const [windowWidth, setWindowWidth] = useState(0);

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
        render={() => (
          <MainPage SWAP_HEADING={SWAP_HEADING} windowWidth={windowWidth} />
        )}
      />
      <Route
        path="/products"
        render={() => (
          <ProductPage SWAP_HEADING={SWAP_HEADING} windowWidth={windowWidth} />
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
