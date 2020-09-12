import React from "react";
import classes from "./Slider.module.scss";

import classnames from "classnames";

import { SliderItem } from "./SliderItem/SliderItem";
import arrowSvg from "../../assets/img/svg/arrow.svg";

type Node = {
  id: number;
  title: string;
  body: string;
};

type SliderDate = {
  nodes: Array<Node>;
};

export const Slider = () => {
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
    <div className={classes.slider}>
      <div className={classes.sliderOverlay}>
        <div className={classes["slider-wrap"]}>
          <div className={classnames(classes.arrow, classes["arrow-left"])}>
            <button className={classes.left}>
              <img src={arrowSvg} alt="arrow" />
            </button>
          </div>
          <div className={classes.slider__content}>
            {data.nodes.map((node) => (
              <SliderItem key={node.id} data={node} />
            ))}
          </div>
          <div className={classnames(classes.arrow, classes["arrow-right"])}>
            <button className={classes.right}>
              <img src={arrowSvg} alt="arrow" />
            </button>
          </div>
        </div>
        <div className={classes.slider__border}>
          <div
            className={classnames(classes.border, classes["border-active"])}
          />
          <div className={classes.border} />
          <div className={classes.border} />
        </div>
      </div>
    </div>
  );
};
