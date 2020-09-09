import React from "react";
import classes from "./Logo.module.scss";

import logoSvg from "../../assets/img/svg/logo.svg";

export const Logo = () => {
  return (
    <div className="logo">
      <img src={logoSvg} alt="Спектр М" />
      <div className={classes.triangle}></div>
    </div>
  );
};
