import React from "react";
import classes from "./SliderItem.module.scss";

import { Button } from "../../UI/Button/Button";
import { INode } from "../../../utils/interfaces/interfaces";

type SliderItemProps = {
  readonly data: INode;
  readonly x?: number;
};

export const SliderItem = ({
  data,
  x,
}: SliderItemProps): React.ReactElement => {
  return (
    <div
      className={classes.sliderItem}
      style={{ transform: `translateX(${x}vw)` }}
    >
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <div className={classes.sliderItem__btn}>
        <Button value={"Смотреть продукцию"} route={"/products"} isPrimary />
      </div>
    </div>
  );
};
