import React from "react";
import classes from "./CarouselItem.module.scss";

import { Link } from "react-router-dom";

import { IProductsData } from "../../../utils/interfaces/interfaces";

type CarouselItemProps = {
  readonly card: IProductsData;
};

export const CarouselItem = ({
  card,
}: CarouselItemProps): React.ReactElement => {
  return (
    <div className={classes.carousel__item}>
      <div className={classes.card__img}>
        <Link to={`/products/${card.title}`}>
          <img src={card.imgUrl} alt={card.title} />
        </Link>
      </div>
      <div className={classes.card__desc}>
        <h5>{card.title}</h5>
        <p>{card.descr}</p>
      </div>
    </div>
  );
};
