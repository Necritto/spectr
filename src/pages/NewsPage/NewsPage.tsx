import React from "react";
import classes from "./NewsPage.module.scss";

import { ISwapHeading } from "../../App";
import { Pagination } from "../../components/Pagination/Pagination";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { Container } from "../../hoc/Container/Container";

export const NewsPage = ({
  SWAP_HEADING,
  windowWidth,
}: ISwapHeading): React.ReactElement => {
  const newsData: Array<{
    id: number;
    imgUrl: string;
    date: string;
    title: string;
  }> = [
    {
      id: 1,
      imgUrl: "img/newsImg/img1.png",
      date: "22.06.2015",
      title: "ИнСпектр на ICAVS 8 2015, Австрия, Вена",
    },
    {
      id: 2,
      imgUrl: "img/newsImg/img2.png",
      date: "19.03.2015",
      title: "XYZ Раман-система для сканирования порошков",
    },
    {
      id: 3,
      imgUrl: "img/newsImg/img3.png",
      date: "01.06.2015",
      title: "EnSpectr на выставке ACHEMA2015 во Франкфурте на Майне, Германия",
    },
    {
      id: 4,
      imgUrl: "img/newsImg/img4.png",
      date: "22.02.2015",
      title:
        "Программное обеспечение для определения жидкостей в бутылочной емкости ",
    },
    {
      id: 5,
      imgUrl: "img/newsImg/img5.png",
      date: "29.05.2015",
      title: "Учебный UV-VIS-NIR спектрометр ИнСпектр на конференции ФССО2015",
    },
    {
      id: 6,
      imgUrl: "img/newsImg/img6.png",
      date: "05.12.2014",
      title: "Пассивированные SERS подложки уже в продаже!",
    },
  ];

  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
      <section className={classes["news-page"]}>
        <Container>
          <div className={classes["news-wrap"]}>
            <h1>Новости и события</h1>
            <div className={classes["news-content"]}>
              <Pagination data={newsData} isNews />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
