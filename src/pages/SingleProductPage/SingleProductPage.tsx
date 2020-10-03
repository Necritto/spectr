import React from "react";
import classes from "./SingleProductPage.module.scss";

import { ISwapHeading } from "../../App";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { Button } from "../../components/UI/Button/Button";
import { AreasItem } from "../AreasPage/AreasItem/AreasItem";
import pdfSvg from "../../assets/img/svg/pdf.svg";

export const SingleProductPage = ({
  SWAP_HEADING,
  windowWidth,
}: ISwapHeading): React.ReactElement => {
  const img = "/img/singleProduct/headImg.png";
  const img1 = "/img/singleProduct/img1.png";

  const navData: Array<{ id: number; title: string; anchor: string }> = [
    {
      id: 1,
      title: "Описание",
      anchor: "description",
    },
    {
      id: 2,
      title: "Особенности",
      anchor: "features",
    },
    {
      id: 3,
      title: "Преимущества",
      anchor: "advantages",
    },
    {
      id: 4,
      title: "Области применения",
      anchor: "areas",
    },
    {
      id: 5,
      title: "Документы",
      anchor: "docs",
    },
    {
      id: 6,
      title: "Спецификация",
      anchor: "spec",
    },
  ];

  const areaData: Array<{ id: number; route?: string; title: string }> = [
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
      title: "Окружающая среда",
    },
    {
      id: Math.random(),
      route: "geolog",
      title: "Геология и минералогия",
    },
    {
      id: Math.random(),
      route: "crime",
      title: "Судебная экспертиза",
    },
    {
      id: Math.random(),
      route: "chimic",
      title: "Химические процессы",
    },
    {
      id: Math.random(),
      route: "med",
      title: "Медицинская диагностика",
    },
    {
      id: Math.random(),
      route: "halphpr",
      title: "Полупроводники",
    },
    {
      id: Math.random(),
      title: "Пищевая промышленность",
    },
  ];

  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
      <section className={classes.header}>
        <div className={classes.container}>
          <div className={classes.heading}>
            <h1>
              РамМикс <span>M532</span>
            </h1>
            <p>Микроскоп комбинационного рассеяния (Раман)</p>
            <div className={classes.heading__btn}>
              <Button isPrimary value={"Заказать"} />
            </div>
          </div>
        </div>
        <div className={classes.header__img}>
          <div className={classes.mask}></div>
          <img src={img} alt="" />
        </div>
      </section>
      <section className={classes.content}>
        <div className={classes.container}>
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
                <p>
                  Раман микроскоп РамМикс М532® сочетает возможности
                  КР-анализатора ИнСпектр R532® Scientific Edition и микроскопа
                  Olympus CX-41, адаптируя его для измерений как на пропускание,
                  так и на отражение.
                </p>
                <p>
                  Широкий функционал микроскопа РамМикс M532® позволяет находить
                  и анализировать отдельные частицы размером 2-3 µм среди
                  множества подобных, обладающих схожими физическими и
                  химическими свойствами, что открывает новые возможности
                  исследований в рамках одной Рамановской системы.
                </p>
                <p>
                  Пространственное разрешение в 1 µм и спектральное разрешение
                  4-6 cм-1 обеспечивают блестящую точность измерений и
                  воспроизводимость результатов. Компактный дизайн и
                  портативность инструмента позволяют проводить качественный и
                  мгновенный анализ веществ без пробоподготовки, что делает
                  РамМикс M532® незаменимым прибором для широкого спектра
                  исследований.
                </p>
                <p>
                  Оснащенный моторизованной подвижкой (опционно) с шагом от 0,36
                  µм, РамМикс M532® сканирует поверхность образца, распознает
                  вещества в многокомпонентных разнородных смесях и создает
                  графическое изображение интенсивностей характерных линий
                  комбинационного рассеяния в различных точках поверхности (2D
                  mapping), что делает РамМикс M532® наиболее выгодным по
                  соотношению цена-качество сканирующим КР микроскопом на
                  мировом рынке.
                </p>
                <div className={classes.youtube}>
                  <iframe
                    title="video"
                    src="https://www.youtube-nocookie.com/embed/PZE05DY43fo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>
              <section className={classes.features} id="features">
                <h2>Особенности</h2>
                <p>
                  <span></span>Высокоточный анализ многокомпонентных смесей и
                  микрообъектов
                </p>
                <p>
                  <span></span>Измерение на пропускание и отражение
                </p>
                <p>
                  <span></span>Позиционирование образца и фокусировка с помощью
                  цифровой камеры
                </p>
                <p>
                  <span></span>Построение 2D карты поверхности образца
                  (опционно)
                </p>
              </section>
              <section className={classes.advantages} id="advantages">
                <h2>Преимущества</h2>
                <p>
                  <span></span>Полнофункциональная Рамановская система высокого
                  класса по привлекательному и более эффективному соотношению
                  цены и качества
                </p>
                <p>
                  <span></span>Компактный дизайн и портативность
                </p>
                <p>
                  <span></span>Качественный и количественный анализ смесей с
                  высокой достоверностью
                </p>
                <p>
                  <span></span>Разработано на базе инновационных технологий
                </p>
                <p>
                  <span></span>Расширенный спектральный диапазон позволяет
                  одновременно анализировать Рамановское излучение и
                  люминесценцию, что дает больше важной информации об изучаемом
                  объекте
                </p>
              </section>
              <section className={classes.areas} id="areas">
                <h2>Области применения</h2>
                <div className={classes["area-wrap"]}>
                  {areaData.map((item) => (
                    <AreasItem data={item} />
                  ))}
                </div>
              </section>
              <section className={classes.docs} id="docs">
                <h2>Документы</h2>
                <div className={classes.docs__item}>
                  <img src={pdfSvg} alt="pdf" />
                  <a href="http://#" target="_blank" rel="noopener noreferrer">
                    Рамановский микроскоп RamMics M532®
                  </a>
                </div>
                <div className={classes.docs__item}>
                  <img src={pdfSvg} alt="pdf" />
                  <a href="http://#" target="_blank" rel="noopener noreferrer">
                    Исследования Графена на сканирующем микроскопе РамМикс
                  </a>
                </div>
                <div className={classes.docs__img}>
                  <img src={img1} alt="graph" />
                </div>
              </section>
            </article>
          </div>
          <div className={classes.line}></div>
        </div>
      </section>
    </main>
  );
};
