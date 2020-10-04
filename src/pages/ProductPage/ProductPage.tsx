import React from "react";
import classes from "./ProductPage.module.scss";

import { Pagination } from "../../components/Pagination/Pagination";
import { ISwapHeading } from "../../App";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { Container } from "../../hoc/Container/Container";

type productsType = {
  id: number;
  imgUrl: string;
  title: string;
  descr: string;
};

export const ProductPage = ({
  SWAP_HEADING,
  windowWidth,
}: ISwapHeading): React.ReactElement => {
  const products: Array<productsType> = [
    {
      id: 1,
      imgUrl: "img/cardImg/img1.png",
      title: "L405",
      descr: "Спектрометр комбинационного рассеяния",
    },
    {
      id: 2,
      imgUrl: "img/cardImg/img2.png",
      title: "R1064",
      descr: "Оптоволоконный UV-VIS-NIR спектрометр",
    },
    {
      id: 3,
      imgUrl: "img/cardImg/img3.png",
      title: "M532",
      descr: "Микроскоп комбинационного рассеяния (Раман)",
    },
    {
      id: 4,
      imgUrl: "img/cardImg/img4.png",
      title: "L365",
      descr: "Люминесцентный спектрометр",
    },
    {
      id: 5,
      imgUrl: "img/cardImg/img5.png",
      title: "L365",
      descr: "SERS Подложка",
    },
    {
      id: 11,
      imgUrl: "img/cardImg/img1.png",
      title: "L405",
      descr: "Спектрометр комбинационного рассеяния",
    },
    {
      id: 12,
      imgUrl: "img/cardImg/img2.png",
      title: "R1064",
      descr: "Оптоволоконный UV-VIS-NIR спектрометр",
    },
    {
      id: 13,
      imgUrl: "img/cardImg/img3.png",
      title: "M532",
      descr: "Микроскоп комбинационного рассеяния (Раман)",
    },
    {
      id: 14,
      imgUrl: "img/cardImg/img4.png",
      title: "L365",
      descr: "Люминесцентный спектрометр",
    },
    {
      id: 15,
      imgUrl: "img/cardImg/img5.png",
      title: "L365",
      descr: "SERS Подложка",
    },
    {
      id: 112,
      imgUrl: "img/cardImg/img1.png",
      title: "L405",
      descr: "Спектрометр комбинационного рассеяния",
    },
    {
      id: 21,
      imgUrl: "img/cardImg/img2.png",
      title: "R1064",
      descr: "Оптоволоконный UV-VIS-NIR спектрометр",
    },
    {
      id: 31,
      imgUrl: "img/cardImg/img3.png",
      title: "M532",
      descr: "Микроскоп комбинационного рассеяния (Раман)",
    },
    {
      id: 41,
      imgUrl: "img/cardImg/img4.png",
      title: "L365",
      descr: "Люминесцентный спектрометр",
    },
    {
      id: 51,
      imgUrl: "img/cardImg/img5.png",
      title: "L365",
      descr: "SERS Подложка",
    },
    {
      id: 111,
      imgUrl: "img/cardImg/img1.png",
      title: "L405",
      descr: "Спектрометр комбинационного рассеяния",
    },
    {
      id: 121,
      imgUrl: "img/cardImg/img2.png",
      title: "R1064",
      descr: "Оптоволоконный UV-VIS-NIR спектрометр",
    },
    {
      id: 131,
      imgUrl: "img/cardImg/img3.png",
      title: "M532",
      descr: "Микроскоп комбинационного рассеяния (Раман)",
    },
    {
      id: 141,
      imgUrl: "img/cardImg/img4.png",
      title: "L365",
      descr: "Люминесцентный спектрометр",
    },
    {
      id: 151,
      imgUrl: "img/cardImg/img5.png",
      title: "L365",
      descr: "SERS Подложка",
    },
  ];

  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
      <section className={classes.products}>
        <Container>
          <div className={classes.heading}>
            <div className={classes.heading__wrap}>
              <h1>Наша продукция</h1>
              <p>
                Наша продукция соответствует самым высоким мировым стандартам
                применяемым к профессиональному научному оборудованию.
              </p>
            </div>
          </div>
          <div className={classes["pagination-content"]}>
            <Pagination data={products} />
          </div>
        </Container>
      </section>
    </main>
  );
};
