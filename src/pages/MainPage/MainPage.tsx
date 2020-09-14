import React from "react";
import classes from "./MainPage.module.scss";

import { Slider } from "../../components/Slider/Slider";
import { Info } from "../../components/Info/Info";
import { Logo } from "../../components/Logo/Logo";
import { SliderItem } from "../../components/Slider/SliderItem/SliderItem";
import { Carousel } from "../../components/Carousel/Carousel";

type MainPageProps = {
  SWAP_HEADING: number;
  windowWidth: number;
};

type Node = {
  id: number;
  title: string;
  body: string;
};

type SliderData = {
  nodes: Array<Node>;
};

export const MainPage = ({ SWAP_HEADING, windowWidth }: MainPageProps) => {
  const sliderData: SliderData = {
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

  const carouselData: Array<{
    id: number;
    imgUrl: string;
    title: string;
    descr: string;
  }> = [
    {
      id: 1,
      imgUrl: "/src/assets/img/cardImg/img1.png",
      title: "L405",
      descr: "Спектрометр комбинационного рассеяния",
    },
    {
      id: 2,
      imgUrl: "/src/assets/img/cardImg/img2.png",
      title: "R1064",
      descr: "Оптоволоконный UV-VIS-NIR спектрометр",
    },
    {
      id: 3,
      imgUrl: "/src/assets/img/cardImg/img3.png",
      title: "M532",
      descr: "Микроскоп комбинационного рассеяния (Раман)",
    },
    {
      id: 4,
      imgUrl: "/src/assets/img/cardImg/img4.png",
      title: "L365",
      descr: "Люминесцентный спектрометр",
    },
    {
      id: 5,
      imgUrl: "/src/assets/img/cardImg/img5.png",
      title: "L365",
      descr: "SERS Подложка",
    },
  ];

  return (
    <main className={classes.main}>
      <section className={classes["slider-section"]}>
        {windowWidth > SWAP_HEADING ? (
          <>
            <Slider data={sliderData} />
            <Info />
          </>
        ) : (
          <div className={classes["resize-wrap"]}>
            <Logo />
            <SliderItem data={sliderData.nodes[0]} />
          </div>
        )}
      </section>
      <section className={classes["carousel-section"]}>
        <div className={classes.container}>
          <Carousel data={carouselData} />
        </div>
      </section>
    </main>
  );
};
