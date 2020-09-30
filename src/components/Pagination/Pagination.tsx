import React from "react";
import classes from "./Pagination.module.scss";

import { PaginationItem } from "./PaginationItem/PaginationItem";
import arrowSvg from "../../assets/img/svg/arrow.svg";

export const Pagination: React.FC = (): React.ReactElement => {
  const data: Array<{
    id: number;
    imgUrl: string;
    title: string;
    descr: string;
  }> = [
    {
      id: 1,
      imgUrl: "/src/assets/img/cardImg/img1.png",
      title: "L405",
      descr: "Спектрометр комбинационного рассеяния",
    },
    {
      id: 2,
      imgUrl: "/src/assets/img/cardImg/img2.png",
      title: "R1064",
      descr: "Оптоволоконный UV-VIS-NIR спектрометр",
    },
    {
      id: 3,
      imgUrl: "/src/assets/img/cardImg/img3.png",
      title: "M532",
      descr: "Микроскоп комбинационного рассеяния (Раман)",
    },
    {
      id: 4,
      imgUrl: "/src/assets/img/cardImg/img4.png",
      title: "L365",
      descr: "Люминесцентный спектрометр",
    },
    {
      id: 5,
      imgUrl: "/src/assets/img/cardImg/img5.png",
      title: "L365",
      descr: "SERS Подложка",
    },
  ];

  return (
    <div className={classes.pagination}>
      <div className={classes.content}>
        {data.map((pageData) => (
          <PaginationItem key={pageData.id} pageData={pageData} />
        ))}
      </div>
      <div className={classes.btns}>
        <div className={classes.arrow}>
          <button className={classes.left}>
            <img src={arrowSvg} alt="arrow" />
          </button>
        </div>
        <div className={classes.btn__pages}>
          <div className={classes.active__pages}>
            <button className={classes.active}>1</button>
          </div>
          <span> из 16</span>
        </div>
        <div className={classes.arrow}>
          <button className={classes.right}>
            <img src={arrowSvg} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
