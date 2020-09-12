import React from "react";
import classes from "./Additional.module.scss";

import searchSvg from "../../assets/img/svg/search.svg";
import timesSvg from "../../assets/img/svg/times.svg";
import envelopeSvg from "../../assets/img/svg/envelope.svg";

type AdditionalProps = {
  onShowModal: () => void;
  onShowSearch: () => void;
  onShowBurgerMenu?: () => void;
  isOpenSearch: boolean;
  isBurgerMenu?: boolean;
};

export const Additional = ({
  onShowModal,
  onShowSearch,
  isOpenSearch,
  isBurgerMenu,
  onShowBurgerMenu,
}: AdditionalProps) => {
  return (
    <div className={classes.additional}>
      <div className={classes.search} onClick={onShowSearch}>
        <div className={classes.search__img}>
          {isOpenSearch && !isBurgerMenu ? (
            <img src={timesSvg} alt="&times;" />
          ) : (
            <img src={searchSvg} alt="search" />
          )}
        </div>
      </div>
      <div className={classes.envelope} onClick={onShowModal}>
        <img src={envelopeSvg} alt="envelope" />
      </div>
      {isBurgerMenu && (
        <div className={classes.burger} onClick={onShowBurgerMenu}>
          <div className={classes.wrap}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
};
