import React from "react";
import classes from "./Logo.module.scss";

import { Link } from "react-router-dom";

import logoSvg from "../../assets/img/svg/logo.svg";

export const Logo = (): React.ReactElement => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logoSvg} alt="Спектр М" />
      </Link>
      <div className={classes.triangle}></div>
    </div>
  );
};
