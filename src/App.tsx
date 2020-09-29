import React, { useState, useEffect } from "react";

import { Layout } from "./hoc/Layout";
import { MainPage } from "./pages/MainPage/MainPage";
import { debounce } from "./utils/helpers/debounce";

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
        <MainPage SWAP_HEADING={SWAP_HEADING} windowWidth={windowWidth} />
      </Layout>
    </>
  );
};

export default App;
