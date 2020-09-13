import React from "react";
import classes from "./SliderItem.module.scss";

import { Button } from "../../UI/Button/Button";

type SliderItemProps = {
  data: {
    id: number;
    title: string;
    body: string;
  };
  x?: number;
};

export const SliderItem = ({ data, x }: SliderItemProps) => {
  return (
    <div
      className={classes.sliderItem}
      style={{ transform: `translateX(${x}vw)` }}
    >
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <div className={classes.sliderItem__btn}>
        <Button value={"Смотреть продукцию"} isPrimary />
      </div>
    </div>
  );
};
