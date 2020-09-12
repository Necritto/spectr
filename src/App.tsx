import React from "react";

import { Layout } from "./hoc/Layout";
import { MainPage } from "./pages/MainPage/MainPage";

const App = () => {
  return (
    <>
      <Layout>
        <MainPage />
      </Layout>
    </>
  );
};

export default App;
