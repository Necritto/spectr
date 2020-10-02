import React from "react";
import classes from "./NewsItem.module.scss";

type NewsItemProps = {
  item: {
    id: number;
    imgUrl: string;
    date: string;
    title: string;
  };
};

export const NewsItem = ({ item }: NewsItemProps) => {
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
