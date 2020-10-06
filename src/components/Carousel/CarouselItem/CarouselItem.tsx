import React from "react";
import classes from "./CarouselItem.module.scss";

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
        <img src={card.imgUrl} alt={card.title} />
      </div>
      <div className={classes.card__desc}>
        <h5>{card.title}</h5>
        <p>{card.descr}</p>
      </div>
    </div>
  );
};
