import React, { useState, useEffect } from "react";

import { Layout } from "./hoc/Layout";
// import { MainPage } from "./pages/MainPage/MainPage";
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

  return (
    <>
      <Layout SWAP_HEADING={SWAP_HEADING} windowWidth={windowWidth}>
        {/* <MainPage SWAP_HEADING={SWAP_HEADING} windowWidth={windowWidth} /> */}
        <ProductPage SWAP_HEADING={SWAP_HEADING} windowWidth={windowWidth} />
      </Layout>
    </>
  );
};

export default App;
