import React from "react";
import classes from "./PaginationItem.module.scss";

import classnames from "classnames";
import { Link } from "react-router-dom";

import { IPaginationData } from "../../../utils/interfaces/interfaces";

type PaginationItemProps = {
  pageData: IPaginationData;
  isNews?: boolean;
};

export const PaginationItem = ({
  pageData,
  isNews,
}: PaginationItemProps): React.ReactElement => {
  let route: string = isNews
    ? `/news/${pageData.id}`
    : `/products/${pageData.title}`;

  return (
    <div
      className={classnames(classes.pagination__item, {
        [classes["pagination__item-news"]]: isNews,
      })}
    >
      <div className={classes.pagination__img}>
        <Link to={route}>
          <img src={pageData.imgUrl} alt={pageData.title} />
        </Link>
      </div>
      <div className={classes.pagination__desc}>
        {isNews && <span>{pageData.date}</span>}
        <h5>{pageData.title}</h5>
        {!isNews && <p>{pageData.descr}</p>}
      </div>
    </div>
  );
};
