import React from "react";
import classes from "./NewsItem.module.scss";

import img1 from "../../../assets/img/newsImg/img1.png";
import img2 from "../../../assets/img/newsImg/img2.png";
import img3 from "../../../assets/img/newsImg/img3.png";
import img4 from "../../../assets/img/newsImg/img4.png";
import img5 from "../../../assets/img/newsImg/img5.png";
import img6 from "../../../assets/img/newsImg/img6.png";

type NewsItemProps = {
  item: {
    id: number;
    imgUrl: string;
    date: string;
    title: string;
  };
};

export const NewsItem = ({ item }: NewsItemProps) => {
  let newsImg: string;

  switch (item.id) {
    case 1:
      newsImg = img1;
      break;
    case 2:
      newsImg = img2;
      break;
    case 3:
      newsImg = img3;
      break;
    case 4:
      newsImg = img4;
      break;
    case 5:
      newsImg = img5;
      break;
    case 6:
      newsImg = img6;
      break;
    default:
      newsImg = img1;
  }

  return (
    <div className={classes.newsItem}>
      <div className={classes.newsItem__img}>
        <img src={newsImg} alt="newsImg" />
      </div>
      <div className={classes.newsItem__descr}>
        <span>{item.date}</span>
        <h4>{item.title}</h4>
      </div>
    </div>
  );
};
