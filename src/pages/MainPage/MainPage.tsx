import React, { useContext } from "react";
import classes from "./MainPage.module.scss";

import { Slider } from "../../components/Slider/Slider";
import { Info } from "../../components/Info/Info";
import { Logo } from "../../components/Logo/Logo";
import { SliderItem } from "../../components/Slider/SliderItem/SliderItem";
import { Carousel } from "../../components/Carousel/Carousel";
import { Button } from "../../components/UI/Button/Button";
import { News } from "../../components/News/News";
import { Map } from "../../components/Map/Map";
import { IMainData } from "../../utils/interfaces/interfaces";
import { Container } from "../../hoc/Container/Container";
import { Context } from "../../utils/context/context";

type MainPageProps = {
  readonly mainData: IMainData;
};

export const MainPage = ({ mainData }: MainPageProps) => {
  const { sliderData, carouselData, newsData } = mainData;
  const { SWAP_HEADING, windowWidth } = useContext(Context);

  return (
    <main className={classes.main}>
      <section className={classes["slider-section"]}>
        {windowWidth > SWAP_HEADING ? (
          <>
            <Slider data={sliderData} />
            <Info />
          </>
        ) : (
          <div className={classes["resize-wrap"]}>
            <Logo />
            <SliderItem data={sliderData.nodes[0]} />
          </div>
        )}
      </section>
      <section className={classes["carousel-section"]}>
        <Container>
          <Carousel data={carouselData} />
        </Container>
      </section>
      <section className={classes.mission}>
        <div className={classes.heading}>
          <h2>
            Наша <span>миссия</span>
          </h2>
        </div>
        <div className={classes.descr}>
          <p>
            Технология, не приносящая пользу обществу, сама по себе бесполезна,
            поэтому мы стремимся внедрить новейшие технологии в жизнь
            современного общества.
          </p>
          <strong>
            Мы — коллектив единомышленников, который{" "}
            <span>разрабатывает, тестирует, производит и поставляет</span>{" "}
            спектральные анализаторы для высокоточного распознавания различных
            веществ.
          </strong>
        </div>
      </section>
      <section className={classes["news-section"]}>
        <h2>Новости компании</h2>
        <div className={classes.news__content}>
          <Container>
            <News data={newsData} />
          </Container>
        </div>
        <div className={classes.news__btn}>
          <Button value={"Все новости"} route={"/news"} />
        </div>
      </section>
      <section className={classes["map-section"]}>
        <Map />
      </section>
    </main>
  );
};
