import React from "react";
import { INewsData } from "../../utils/interfaces/interfaces";
import classes from "./News.module.scss";

import { NewsItem } from "./NewsItem/NewsItem";

type NewsProps = {
  readonly data: ReadonlyArray<INewsData>;
};

export const News = ({ data }: NewsProps): React.ReactElement => {
  return (
    <div className={classes.news}>
      {data.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
};
