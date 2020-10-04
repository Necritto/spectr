import React, { useState } from "react";
import classes from "./Slider.module.scss";

import classnames from "classnames";

import { SliderItem } from "./SliderItem/SliderItem";
import arrowSvg from "../../assets/img/svg/arrow.svg";
import { ISliderData } from "../../utils/interfaces/interfaces";

type SliderProps = {
  readonly data: ISliderData;
};

export const Slider = ({ data }: SliderProps) => {
  const [x, setX] = useState(0);
  let prettyX: number = (x * -1) / 100;

  const leftSlide = (): void =>
    x === 0 ? setX(-100 * (data.nodes.length - 1)) : setX(x + 100);

  const rightSlide = (): void =>
    x === -100 * (data.nodes.length - 1) ? setX(0) : setX(x - 100);

  return (
    <div className={classes.slider}>
      <div className={classes.sliderOverlay}>
        <div className={classes["slider-wrap"]}>
          <div className={classnames(classes.arrow, classes["arrow-left"])}>
            <button className={classes.left} onClick={leftSlide}>
              <img src={arrowSvg} alt="arrow" />
            </button>
          </div>
          <div className={classes.slider__content}>
            {data.nodes.map((node) => (
              <SliderItem key={node.id} data={node} x={x} />
            ))}
          </div>
          <div className={classnames(classes.arrow, classes["arrow-right"])}>
            <button className={classes.right} onClick={rightSlide}>
              <img src={arrowSvg} alt="arrow" />
            </button>
          </div>
        </div>
        <div className={classes.slider__border}>
          <div
            className={classnames(classes.border, {
              [classes["border-active"]]: prettyX === 0,
            })}
          />
          <div
            className={classnames(classes.border, {
              [classes["border-active"]]: prettyX === 1,
            })}
          />
          <div
            className={classnames(classes.border, {
              [classes["border-active"]]: prettyX === 2,
            })}
          />
        </div>
      </div>
    </div>
  );
};
