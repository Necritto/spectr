import React from "react";
import classes from "./NewsItem.module.scss";

import { Link } from "react-router-dom";

import { INewsData } from "../../../utils/interfaces/interfaces";

type NewsItemProps = {
  readonly item: INewsData;
};

export const NewsItem = ({ item }: NewsItemProps): React.ReactElement => {
  return (
    <div className={classes.newsItem}>
      <div className={classes.newsItem__img}>
        <Link to={`/news/${item.id}`}>
          <img src={item.imgUrl} alt="newsImg" />
        </Link>
      </div>
      <div className={classes.newsItem__descr}>
        <span>{item.date}</span>
        <h4>{item.title}</h4>
      </div>
    </div>
  );
};
