import React from "react";
import classes from "./News.module.scss";

import { NewsItem } from "./NewsItem/NewsItem";

type NewsProps = {
  data: Array<{
    id: number;
    imgUrl: string;
    date: string;
    title: string;
  }>;
};

export const News = ({ data }: NewsProps) => {
  return (
    <div className={classes.news}>
      {data.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
};
