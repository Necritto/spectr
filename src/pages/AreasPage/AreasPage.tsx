import React from "react";
import classes from "./AreasPage.module.scss";

import { ISwapHeading } from "../../utils/interfaces/interfaces";
import { AreasItem } from "./AreasItem/AreasItem";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { Container } from "../../hoc/Container/Container";

export const AreasPage = ({
  SWAP_HEADING,
  windowWidth,
}: ISwapHeading): React.ReactElement => {
  const data: Array<{ id: number; route?: string; title: string }> = [
    {
      id: Math.random(),
      route: "biotech",
      title: "Биотехнологии",
    },
    {
      id: Math.random(),
      route: "lowkp",
      title: "Низкочастотная КР-спектроскопия",
    },
    {
      id: Math.random(),
      route: "learnkp",
      title: "Обучение КР-спектроскопии",
    },
    {
      id: Math.random(),
      route: "sers",
      title: "SERS-аналитика",
    },
    {
      id: Math.random(),
      route: "spectr",
      title: "Спектральные маркеры",
    },
    {
      id: Math.random(),
      route: "pharma",
      title: "Фармацевтика",
    },
    {
      id: Math.random(),
      route: "gemmol",
      title: "Геммология",
    },
    {
      id: Math.random(),
      route: "geolog",
      title: "Геология",
    },
    {
      id: Math.random(),
      route: "crime",
      title: "Криминалистика",
    },
    {
      id: Math.random(),
      route: "chimic",
      title: "Химия",
    },
    {
      id: Math.random(),
      route: "med",
      title: "Медицина",
    },
    {
      id: Math.random(),
      route: "halphpr",
      title: "Полупроводники",
    },
    {
      id: Math.random(),
      route: "art",
      title: "Искусство",
    },
  ];

  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
      <section className={classes.areas}>
        <Container>
          <div className={classes["areas-wrap"]}>
            <h1>Области применения</h1>
            <div className={classes.tile}>
              {data.map((item) => (
                <AreasItem key={item.id} data={item} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
