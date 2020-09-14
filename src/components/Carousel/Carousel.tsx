import React, { useState } from "react";
import classes from "./Carousel.module.scss";

import { Button } from "../UI/Button/Button";
import { CarouselItem } from "./CarouselItem/CarouselItem";
import arrowSvg from "../../assets/img/svg/arrow.svg";

type CarouselProps = {
  data: Array<{
    id: number;
    imgUrl: string;
    title: string;
    descr: string;
  }>;
};

export const Carousel = ({ data }: CarouselProps) => {
  const [cards, setCards] = useState(data);

  const slideRight = (): void => {
    let last = cards.slice(-1);
    let rest = cards.slice(0, -1);
    let modifyCards = last.concat(rest);
    setCards(modifyCards);
  };

  const slideLeft = (): void => {
    let first = cards.slice(0, 1);
    let rest = cards.slice(1);
    let modifyCards = rest.concat(first);
    setCards(modifyCards);
  };

  return (
    <div className={classes.carousel}>
      <div className={classes.carousel__header}>
        <div className={classes.arrow}>
          <button className={classes.left} onClick={slideLeft}>
            <img src={arrowSvg} alt="arrow" />
          </button>
        </div>
        <h2>Популярные товары</h2>
        <div className={classes.arrow}>
          <button className={classes.right} onClick={slideRight}>
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
