import React from "react";
import classes from "./Button.module.scss";

import classnames from "classnames";
import { Link } from "react-router-dom";

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
  readonly route?: string;
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
  route,
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
      {!route && !isTimes && value}
      {!isTimes && value && route && <Link to={route}>{value}</Link>}
    </button>
  );
};
