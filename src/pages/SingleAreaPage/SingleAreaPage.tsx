import React, { useContext } from "react";
import classes from "./SingleAreaPage.module.scss";

import classnames from "classnames";

import { Context } from "../../utils/context/context";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { Container } from "../../hoc/Container/Container";
import { IAreaData } from "../../utils/interfaces/interfaces";
import pdfSvg from "../../assets/img/svg/pdf.svg";
import { Line } from "../../components/UI/Line/Line";
import { CarouselItem } from "../../components/Carousel/CarouselItem/CarouselItem";

type SingleAreaPageProps = {
  readonly areaData: IAreaData;
};

export const SingleAreaPage = ({
  areaData,
}: SingleAreaPageProps): React.ReactElement => {
  const { SWAP_HEADING, windowWidth } = useContext(Context);
  const {
    theme_article,
    small_descr,
    imgUrl,
    descr,
    descr_tasks,
    docsLinks,
    standarts_predescr,
    standarts,
    area_products,
  } = areaData;

  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
      <section className={classes.area}>
        <Container>
          <div className={classes["area-wrap"]}>
            <div className={classes.link}>
              <span className={classes.area__item}>Области применения</span>
              <span className={classes.arrow}>&rsaquo;</span>
              <span
                className={classnames(
                  classes.area__item,
                  classes["area__item-active"]
                )}
              >
                {theme_article}
              </span>
            </div>
            <article className={classes["area-article"]}>
              <header className={classes["article-header"]}>
                <h1>{theme_article}</h1>
                <b>{small_descr}</b>
                <div className={classes.header__img}>
                  <img src={imgUrl} alt={theme_article} />
                </div>
              </header>
              <main className={classes["article-main"]}>
                <div className={classes.descr}>
                  {descr.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                  <div className={classes.descr__item}>
                    {descr_tasks.map((item) => (
                      <p key={item}>
                        <span className={classes.dot}></span>
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className={classes.docs}>
                    {docsLinks.map((item) => (
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
                  </div>
                </div>
                <div className={classes.standarts}>
                  <p>{standarts_predescr}</p>
                  {standarts.map((item) => (
                    <div key={item.id} className={classes.standarts__item}>
                      <h2>{item.title}</h2>
                      {item.descr.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                      {item.descr_item &&
                        item.descr_item.map((item) => (
                          <p key={item}>
                            <span className={classes.dot}></span>
                            {item}
                          </p>
                        ))}
                      {item.descr_imgs && (
                        <div className={classes.item__img}>
                          {item.descr_imgs.map((item) => (
                            <img key={item} src={item} alt="graph" />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </main>
            </article>
          </div>
          <Line />
          <section className={classes.products}>
            <h2>Товары из этой области</h2>
            <div className={classes["products-wrap"]}>
              {area_products.map((item) => (
                <CarouselItem key={item.id} card={item} />
              ))}
            </div>
          </section>
        </Container>
      </section>
    </main>
  );
};
