import React from "react";
import classes from "./NewsItem.module.scss";

import { INewsData } from "../../../utils/interfaces/interfaces";

type NewsItemProps = {
  readonly item: INewsData;
};

export const NewsItem = ({ item }: NewsItemProps): React.ReactElement => {
  return (
    <div className={classes.newsItem}>
      <div className={classes.newsItem__img}>
        <img src={item.imgUrl} alt="newsImg" />
      </div>
      <div className={classes.newsItem__descr}>
        <span>{item.date}</span>
        <h4>{item.title}</h4>
      </div>
    </div>
  );
};
