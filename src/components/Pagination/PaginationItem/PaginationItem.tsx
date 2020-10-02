import React from "react";
import classes from "./PaginationItem.module.scss";

import classnames from "classnames";

type PaginationItemProps = {
  pageData: {
    id: number;
    imgUrl: string;
    title: string;
    descr?: string;
    date?: string;
  };
  isNews?: boolean;
};

export const PaginationItem = ({
  pageData,
  isNews,
}: PaginationItemProps): React.ReactElement => {
  return (
    <div
      className={classnames(classes.pagination__item, {
        [classes["pagination__item-news"]]: isNews,
      })}
    >
      <div className={classes.pagination__img}>
        <img src={pageData.imgUrl} alt={pageData.title} />
      </div>
      <div className={classes.pagination__desc}>
        {isNews && <span>{pageData.date}</span>}
        <h5>{pageData.title}</h5>
        {!isNews && <p>{pageData.descr}</p>}
      </div>
    </div>
  );
};
