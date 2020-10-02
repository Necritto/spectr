import React from "react";
import classes from "./PaginationItem.module.scss";

type PaginationItemProps = {
  pageData: {
    id: number;
    imgUrl: string;
    title: string;
    descr: string;
  };
};

export const PaginationItem = ({
  pageData,
}: PaginationItemProps): React.ReactElement => {
  return (
    <div className={classes.pagination__item}>
      <div className={classes.pagination__img}>
        <img src={pageData.imgUrl} alt={pageData.title} />
      </div>
      <div className={classes.pagination__desc}>
        <h5>{pageData.title}</h5>
        <p>{pageData.descr}</p>
      </div>
    </div>
  );
};
