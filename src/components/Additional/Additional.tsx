import React from "react";
import classes from "./Additional.module.scss";

import searchSvg from "../../assets/img/svg/search.svg";
import envelopeSvg from "../../assets/img/svg/envelope.svg";

export const Additional = () => {
  return (
    <div className={classes.additional}>
      <div className={classes.search}>
        <div className={classes.search__img}>
          <img src={searchSvg} alt="search" />
        </div>
      </div>
      <div className={classes.envelope}>
        <img src={envelopeSvg} alt="envelope" />
      </div>
    </div>
  );
};
