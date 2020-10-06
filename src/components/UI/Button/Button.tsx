import React from "react";
import classes from "./Button.module.scss";

import classnames from "classnames";

import timesSvg from "../../../assets/img/svg/times.svg";

type ButtonProps = {
  readonly value?: string;
  readonly type?: "submit";
  readonly isPrimary?: boolean;
  readonly isCancel?: boolean;
  readonly isTimes?: boolean;
  readonly onShow?: () => void;
  readonly onClose?: () => void;
  readonly onSubmit?: () => void;
};

export const Button = ({
  value,
  type,
  isPrimary,
  isCancel,
  isTimes,
  onShow,
  onClose,
  onSubmit,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={classnames(classes.button, {
        [classes["button-primary"]]: isPrimary,
        [classes["button-cancel"]]: isCancel,
        [classes["button-times"]]: isTimes,
      })}
      type={type}
      onClick={onShow || onClose}
      onSubmit={onSubmit}
    >
      {isTimes && <img src={timesSvg} alt="&times;" />}
      {!isTimes && value}
    </button>
  );
};
