import React from "react";
import classes from "./Carousel.module.scss";

import { Button } from "../UI/Button/Button";
import { CarouselItem } from "./CarouselItem/CarouselItem";
import arrowSvg from "../../assets/img/svg/arrow.svg";

export const Carousel = () => {
  const cards: Array<{
    id: number;
    imgUrl: string;
    title: string;
    descr: string;
  }> = [
    {
      id: 1,
      imgUrl: "https://source.unsplash.com/500x200/?nature?id=1",
      title: "L405",
      descr: "Спектрометр комбинационного рассеяния",
    },
    {
      id: 2,
      imgUrl: "https://source.unsplash.com/500x200/?nature?id=2",
      title: "R1064",
      descr: "Оптоволоконный UV-VIS-NIR спектрометр",
    },
    {
      id: 3,
      imgUrl: "https://source.unsplash.com/500x200/?nature?id=3",
      title: "M532",
      descr: "Микроскоп комбинационного рассеяния (Раман)",
    },
    {
      id: 4,
      imgUrl: "https://source.unsplash.com/500x200/?nature?id=4",
      title: "L365",
      descr: "Люминесцентный спектрометр",
    },
    {
      id: 5,
      imgUrl: "https://source.unsplash.com/500x200/?nature?id=5",
      title: "L365",
      descr: "SERS Подложка",
    },
  ];

  return (
    <div className={classes.carousel}>
      <div className={classes.carousel__header}>
        <div className={classes.arrow}>
          <button className={classes.left}>
            <img src={arrowSvg} alt="arrow" />
          </button>
        </div>
        <h2>Популярные товары</h2>
        <div className={classes.arrow}>
          <button className={classes.right}>
            <img src={arrowSvg} alt="arrow" />
          </button>
        </div>
      </div>
      <div className={classes.carousel__body}>
        {cards.map((card) => (
          <CarouselItem key={card.id} card={card} />
        ))}
      </div>
      <div className={classes.carousel__footer}>
        <Button value={"Смотреть все товары"} />
      </div>
    </div>
  );
};
