import React from "react";
import classes from "./MainPage.module.scss";

import { Slider } from "../../components/Slider/Slider";
import { Info } from "../../components/Info/Info";

export const MainPage = () => {
  return (
    <main className={classes.main}>
      <section className={classes["slider-section"]}>
        <Slider />
        <Info />
      </section>
    </main>
  );
};
