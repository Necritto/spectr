import React from "react";
import classes from "./PaginationItem.module.scss";

import img1 from "../../../assets/img/cardImg/img1.png";
import img2 from "../../../assets/img/cardImg/img2.png";
import img3 from "../../../assets/img/cardImg/img3.png";
import img4 from "../../../assets/img/cardImg/img4.png";
import img5 from "../../../assets/img/cardImg/img5.png";

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
  let pageDataImg: string;

  switch (pageData.id) {
    case 1:
      pageDataImg = img1;
      break;
    case 2:
      pageDataImg = img2;
      break;
    case 3:
      pageDataImg = img3;
      break;
    case 4:
      pageDataImg = img4;
      break;
    case 5:
      pageDataImg = img5;
      break;
    default:
      pageDataImg = img1;
  }

  return (
    <div className={classes.pagination__item}>
      <div className={classes.pagination__img}>
        <img src={pageDataImg} alt={pageData.title} />
      </div>
      <div className={classes.pagination__desc}>
        <h5>{pageData.title}</h5>
        <p>{pageData.descr}</p>
      </div>
    </div>
  );
};
