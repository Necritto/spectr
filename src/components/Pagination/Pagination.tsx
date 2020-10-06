import React, { useState } from "react";
import classes from "./Pagination.module.scss";

import chunk from "lodash/chunk";

import { PaginationItem } from "./PaginationItem/PaginationItem";
import arrowSvg from "../../assets/img/svg/arrow.svg";
import { IPaginationData } from "../../utils/interfaces/interfaces";

type PaginationProps = {
  readonly data: ReadonlyArray<IPaginationData>;
  readonly isNews?: boolean;
};

export const Pagination = ({
  data,
  isNews,
}: PaginationProps): React.ReactElement => {
  let [currentPage, setCurrentPage] = useState(0);
  const productOnPage: number = 6;
  const numberOfPages: number = Math.ceil(data.length / productOnPage);

  const displayedData: ReadonlyArray<IPaginationData> = chunk(
    data,
    productOnPage
  )[currentPage];

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (e.currentTarget.id === "left" && currentPage > 0) {
      setCurrentPage(--currentPage);
    }

    if (e.currentTarget.id === "right" && currentPage < numberOfPages - 1) {
      setCurrentPage(++currentPage);
    }
  };

  return (
    <div className={classes.pagination}>
      <div className={classes.content}>
        {displayedData.map((pageData) => (
          <PaginationItem
            key={pageData.id}
            pageData={pageData}
            isNews={isNews}
          />
        ))}
      </div>
      <div className={classes.btns}>
        <div className={classes.arrow}>
          <button
            onClick={(e) => onClickHandler(e)}
            id="left"
            className={classes.left}
          >
            <img src={arrowSvg} alt="arrow" />
          </button>
        </div>
        <div className={classes.btn__pages}>
          <span className={classes.active__pages}>{currentPage + 1}</span>
          <span> из {numberOfPages}</span>
        </div>
        <div className={classes.arrow}>
          <button
            onClick={(e) => onClickHandler(e)}
            id="right"
            className={classes.right}
          >
            <img src={arrowSvg} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
