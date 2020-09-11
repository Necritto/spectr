import React from "react";
import classes from "./Additional.module.scss";

import searchSvg from "../../assets/img/svg/search.svg";
import timesSvg from "../../assets/img/svg/times.svg";
import envelopeSvg from "../../assets/img/svg/envelope.svg";

type AdditionalProps = {
  onShowModal: () => void;
  onShowSearch: () => void;
  isOpenSearch: boolean;
};

export const Additional = ({
  onShowModal,
  onShowSearch,
  isOpenSearch,
}: AdditionalProps) => {
  return (
    <div className={classes.additional}>
      <div className={classes.search} onClick={onShowSearch}>
        <div className={classes.search__img}>
          {isOpenSearch ? (
            <img src={timesSvg} alt="&times;" />
          ) : (
            <img src={searchSvg} alt="search" />
          )}
        </div>
      </div>
      <div className={classes.envelope} onClick={onShowModal}>
        <img src={envelopeSvg} alt="envelope" />
      </div>
    </div>
  );
};
