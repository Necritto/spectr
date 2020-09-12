import React from "react";
import classes from "./Search.module.scss";

import classnames from "classnames";

import { Button } from "../Button/Button";
import searchSvg from "../../../assets/img/svg/search-bg.svg";

type SearchType = {
  onClick: () => void;
  isSearchModal?: boolean;
};

export const Search = ({ onClick, isSearchModal }: SearchType) => {
  return (
    <>
      {isSearchModal ? (
        <div className={classes.searchOverlay}>
          <div
            className={classnames(classes.search, {
              [classes["search-modal"]]: isSearchModal,
            })}
          >
            <div className={classes.search__input}>
              <input type="text" />
              <button onClick={onClick}>
                <img src={searchSvg} alt="search" />
              </button>
            </div>
            <div className={classes.search__btn}>
              <Button isTimes onClose={onClick} />
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.search}>
          <div className={classes.search__input}>
            <input type="text" />
          </div>
          <div className={classes.search__btn}>
            <Button value={"Искать"} onShow={onClick} />
          </div>
        </div>
      )}
    </>
  );
};
