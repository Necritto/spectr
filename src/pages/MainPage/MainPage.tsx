import React from "react";
import classes from "./MainPage.module.scss";

import { Slider } from "../../components/Slider/Slider";
import { Info } from "../../components/Info/Info";
import { Logo } from "../../components/Logo/Logo";
import { SliderItem } from "../../components/Slider/SliderItem/SliderItem";

type MainPageProps = {
  SWAP_HEADING: number;
  windowWidth: number;
};

type Node = {
  id: number;
  title: string;
  body: string;
};

type SliderDate = {
  nodes: Array<Node>;
};

export const MainPage = ({ SWAP_HEADING, windowWidth }: MainPageProps) => {
  const data: SliderDate = {
    nodes: [
      {
        id: 1,
        title: "Единственный в России",
        body:
          "«Спектр-М» — признанный производитель первоклассных портативных Рамановских экспрессс - анализаторов.",
      },
      {
        id: 2,
        title: "Вторичный в России",
        body:
          "«Спектр-М» — признанный производитель вторичных портативных Рамановских экспрессс - анализаторов.",
      },
      {
        id: 3,
        title: "Какой-то в России",
        body:
          "«Спектр-М» — признанный производитель каких-то портативных Рамановских экспрессс - анализаторов.",
      },
    ],
  };

  return (
    <main className={classes.main}>
      <section className={classes["slider-section"]}>
        {windowWidth > SWAP_HEADING ? (
          <>
            <Slider data={data} />
            <Info />
          </>
        ) : (
          <div className={classes["resize-wrap"]}>
            <Logo />
            <SliderItem data={data.nodes[0]} />
          </div>
        )}
      </section>
    </main>
  );
};
