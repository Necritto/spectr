import React from "react";
import classes from "./MainPage.module.scss";

import { Slider } from "../../components/Slider/Slider";
import { Info } from "../../components/Info/Info";
import { Logo } from "../../components/Logo/Logo";
import { SliderItem } from "../../components/Slider/SliderItem/SliderItem";
import { Carousel } from "../../components/Carousel/Carousel";
import { Button } from "../../components/UI/Button/Button";
import { News } from "../../components/News/News";
import { Map } from "../../components/Map/Map";
import { ISwapHeading } from "../../utils/interfaces/interfaces";
import { Container } from "../../hoc/Container/Container";

type Node = {
  id: number;
  title: string;
  body: string;
};

type SliderData = {
  nodes: Array<Node>;
};

export const MainPage = ({ SWAP_HEADING, windowWidth }: ISwapHeading) => {
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
    {
      id: 5,
      imgUrl: "img/cardImg/img5.png",
      title: "L365",
      descr: "SERS Подложка",
    },
  ];

  const newsData: Array<{
    id: number;
    imgUrl: string;
    date: string;
    title: string;
  }> = [
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
    {
      id: 3,
      imgUrl: "img/newsImg/img3.png",
      date: "01.06.2015",
      title: "EnSpectr на выставке ACHEMA2015 во Франкфурте на Майне, Германия",
    },
    {
      id: 4,
      imgUrl: "img/newsImg/img4.png",
      date: "22.02.2015",
      title:
        "Программное обеспечение для определения жидкостей в бутылочной емкости ",
    },
    {
      id: 5,
      imgUrl: "img/newsImg/img5.png",
      date: "29.05.2015",
      title: "Учебный UV-VIS-NIR спектрометр ИнСпектр на конференции ФССО2015",
    },
    {
      id: 6,
      imgUrl: "img/newsImg/img6.png",
      date: "05.12.2014",
      title: "Пассивированные SERS подложки уже в продаже!",
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
        <Container>
          <Carousel data={carouselData} />
        </Container>
      </section>
      <section className={classes.mission}>
        <div className={classes.heading}>
          <h2>
            Наша <span>миссия</span>
          </h2>
        </div>
        <div className={classes.descr}>
          <p>
            Технология, не приносящая пользу обществу, сама по себе бесполезна,
            поэтому мы стремимся внедрить новейшие технологии в жизнь
            современного общества.
          </p>
          <strong>
            Мы — коллектив единомышленников, который{" "}
            <span>разрабатывает, тестирует, производит и поставляет</span>{" "}
            спектральные анализаторы для высокоточного распознавания различных
            веществ.
          </strong>
        </div>
      </section>
      <section className={classes["news-section"]}>
        <h2>Новости компании</h2>
        <div className={classes.news__content}>
          <Container>
            <News data={newsData} />
          </Container>
        </div>
        <div className={classes.news__btn}>
          <Button value={"Все новости"} />
        </div>
      </section>
      <section className={classes["map-section"]}>
        <Map />
      </section>
    </main>
  );
};
