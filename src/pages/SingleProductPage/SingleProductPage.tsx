import React, { useContext } from "react";
import classes from "./SingleProductPage.module.scss";

import { IProductData } from "../../utils/interfaces/interfaces";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { Button } from "../../components/UI/Button/Button";
import { AreasItem } from "../AreasPage/AreasItem/AreasItem";
import pdfSvg from "../../assets/img/svg/pdf.svg";
import { Line } from "../../components/UI/Line/Line";
import { Table } from "../../components/Table/Table";
import { Container } from "../../hoc/Container/Container";
import { IFrame } from "../../components/IFrame/IFrame";
import { CarouselItem } from "../../components/Carousel/CarouselItem/CarouselItem";
import { Context } from "../../utils/context/context";

type SingleProductPageProps = {
  readonly productData: IProductData;
};

export const SingleProductPage = ({
  productData,
}: SingleProductPageProps): React.ReactElement => {
  const { SWAP_HEADING, windowWidth } = useContext(Context);
  const { name, mark, productDescr, imgUrl, article } = productData;
  const {
    descr,
    videoSrc,
    features,
    advantages,
    areas,
    docs,
    docsImg,
    tableData,
    similarProducts,
  } = article;

  const navData: ReadonlyArray<{
    readonly id: number;
    readonly title: string;
    readonly anchor: string;
  }> = [
    {
      id: 1,
      title: "Описание",
      anchor: "description",
    },
    {
      id: 2,
      title: "Особенности ",
      anchor: "features",
    },
    {
      id: 3,
      title: "Преимущества ",
      anchor: "advantages",
    },
    {
      id: 4,
      title: "Области применения ",
      anchor: "areas",
    },
    {
      id: 5,
      title: "Документы ",
      anchor: "docs",
    },
    {
      id: 6,
      title: "Спецификация ",
      anchor: "spec",
    },
  ];

  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
      <section className={classes.header}>
        <Container>
          <div className={classes.heading}>
            <h1>
              {name} <span>{mark}</span>
            </h1>
            <p>{productDescr}</p>
            <div className={classes.buy__btn}>
              <Button isPrimary value={"Заказать"} />
            </div>
          </div>
        </Container>
        <div className={classes.header__img}>
          <div className={classes.mask}></div>
          <img src={imgUrl} alt={`${name} ${mark}`} />
        </div>
      </section>
      <section className={classes.content}>
        <Container>
          <div className={classes["content-wrap"]}>
            <aside>
              <div className={classes.back__btn}>
                <Button isCancel value={"Назад к списку"} />
              </div>
              <nav>
                <ol>
                  {navData.map((item) => (
                    <li>
                      <span>{`${item.id}.`}</span>
                      <a href={`#${item.anchor}`}>{item.title}</a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className={classes.buy__btn}>
                <Button value={"Заказать"} />
              </div>
            </aside>
            <article className={classes.article}>
              <section className={classes.description} id="description">
                <h2>Описание</h2>
                {descr.map((item) => (
                  <p>{item}</p>
                ))}
                <IFrame src={videoSrc} />
              </section>
              <section className={classes.features} id="features">
                <h2>Особенности</h2>
                {features.map((item) => (
                  <p>
                    <span></span>
                    {item}
                  </p>
                ))}
              </section>
              <section className={classes.advantages} id="advantages">
                <h2>Преимущества</h2>
                {advantages.map((item) => (
                  <p>
                    <span></span>
                    {item}
                  </p>
                ))}
              </section>
              <section className={classes.areas} id="areas">
                <h2>Области применения</h2>
                <div className={classes["area-wrap"]}>
                  {areas.map((item) => (
                    <AreasItem data={item} />
                  ))}
                </div>
              </section>
              <section className={classes.docs} id="docs">
                <h2>Документы</h2>
                {docs.map((item) => (
                  <div key={item.id} className={classes.docs__item}>
                    <img src={pdfSvg} alt="pdf" />
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  </div>
                ))}
                <div className={classes.docs__img}>
                  {docsImg.map((item) => (
                    <img src={item.imgUrl} alt="graph" />
                  ))}
                </div>
              </section>
            </article>
          </div>
          <Line />
          <section className={classes.spec} id="spec">
            <h2>Спецификация микроскопа</h2>
            <div className={classes["table-wrap"]}>
              <Table tableData={tableData} />
            </div>
            <div className={classes.buy__btn}>
              <Button value={"Заказать"} />
            </div>
          </section>
          <Line />
          <section className={classes.similar}>
            {similarProducts.map((item) => (
              <CarouselItem card={item} />
            ))}
          </section>
        </Container>
      </section>
    </main>
  );
};
