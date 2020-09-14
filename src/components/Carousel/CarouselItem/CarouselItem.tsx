import React from "react";
import classes from "./CarouselItem.module.scss";

import img1 from "../../../assets/img/cardImg/img1.png";
import img2 from "../../../assets/img/cardImg/img2.png";
import img3 from "../../../assets/img/cardImg/img3.png";
import img4 from "../../../assets/img/cardImg/img4.png";
import img5 from "../../../assets/img/cardImg/img5.png";

type CarouselItemProps = {
  card: {
    id: number;
    imgUrl: string;
    title: string;
    descr: string;
  };
};

export const CarouselItem = ({ card }: CarouselItemProps) => {
  let cardImg: string;

  switch (card.id) {
    case 1:
      cardImg = img1;
      break;
    case 2:
      cardImg = img2;
      break;
    case 3:
      cardImg = img3;
      break;
    case 4:
      cardImg = img4;
      break;
    case 5:
      cardImg = img5;
      break;
    default:
      cardImg = img1;
  }

  return (
    <div className={classes.carousel__item}>
      <div className={classes.card__img}>
        <img src={cardImg} alt={card.title} />
      </div>
      <div className={classes.card__desc}>
        <h5>{card.title}</h5>
        <p>{card.descr}</p>
      </div>
    </div>
  );
};
