import React from "react";
import classes from "./SingleProductPage.module.scss";

import { ISwapHeading } from "../../App";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { Button } from "../../components/UI/Button/Button";
import { AreasItem } from "../AreasPage/AreasItem/AreasItem";
import pdfSvg from "../../assets/img/svg/pdf.svg";
import { Line } from "../../components/UI/Line/Line";

type TableData = {
  thead: ReadonlyArray<{ id: number; th: string }>;
  tbody: ReadonlyArray<{
    blocks: ReadonlyArray<{
      id: number;
      th?: string;
      td?: [string, string, string];
    }>;
  }>;
};

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

  const tableData: TableData = {
    thead: [
      {
        id: Math.random(),
        th: "Экспресс - анализатор R532",
      },
      {
        id: Math.random(),
        th: "Экспресс - анализатор R532-50",
      },
    ],
    tbody: [
      {
        blocks: [
          {
            id: Math.random(),
            th: "Лазер",
          },
          {
            id: Math.random(),
            td: ["Длина волны", "532 нм", "532 нм"],
          },
          {
            id: Math.random(),
            td: ["Мощность лазера", "30 мВт", "30 мВт"],
          },
          {
            id: Math.random(),
            th: "Спектрометр",
          },
          {
            id: Math.random(),
            td: [
              "Спектральный диапазон",
              "100 см-1 – 4000 см-1",
              "100 см-1 – 4000 см-1",
            ],
          },
          {
            id: Math.random(),
            td: ["Спектральное разрешение", "4-6 см-1", "7 см-1"],
          },
          {
            id: Math.random(),
            th: "Спектрометр",
          },
          {
            id: Math.random(),
            td: ["Тип детектора", "ПЗС-линейка", "ПЗС-линейка"],
          },
          {
            id: Math.random(),
            td: ["Число пикселей", "3648", "3648"],
          },
          {
            id: Math.random(),
            td: ["Размер пикселей", "8 мкм x 200 мкм", "8 мкм x 200 мкм"],
          },
          {
            id: Math.random(),
            td: ["Темновой ток", "630 e/pixel/s", "630 e/pixel/s"],
          },
          {
            id: Math.random(),
            td: ["Шум считывания", "30 e ско", "30 e ско"],
          },
          {
            id: Math.random(),
            td: ["Динамический диапазон", "2100", "2100"],
          },
          {
            id: Math.random(),
            td: ["Максимальный квантовый выход", "90%", "90%"],
          },
          {
            id: Math.random(),
            td: ["Время интеграции", "10 мс – 500000 мс", "10 мс – 500000 мс"],
          },
          {
            id: Math.random(),
            th: "Оптическая схема",
          },
          {
            id: Math.random(),
            td: ["Фокусное расстояние", "75 мм", "75 мм"],
          },
          {
            id: Math.random(),
            td: ["Входная щель", "20 мкм (30 мкм опционально)", "20 мкм"],
          },
          {
            id: Math.random(),
            td: [
              "Дифракционная решетка",
              "1800 ш/мм голографическая",
              "1800 ш/мм голографическая",
            ],
          },
          {
            id: Math.random(),
            th: "Электротехнические характеристики",
          },
          {
            id: Math.random(),
            td: ["USB", "1 внешний порт 2.0", "1 внешний порт 2.0"],
          },
          {
            id: Math.random(),
            td: [
              "Входное напряжение",
              "100 – 240 В, 50 –60 Гц",
              "100 – 240 В, 50 –60 Гц",
            ],
          },
          {
            id: Math.random(),
            td: [
              "Системные требования",
              "Windows XP/Vista/7/8",
              "Windows XP/Vista/7/8",
            ],
          },
          {
            id: Math.random(),
            th: "Физические характеристики",
          },
          {
            id: Math.random(),
            td: [
              "Габариты",
              "222 мм x 145 мм x 55 мм",
              "180 мм x 122 мм x 60 мм",
            ],
          },
          {
            id: Math.random(),
            td: ["Вес", "1.5 кг", "0.9 кг"],
          },
        ],
      },
    ],
  };

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
            <div className={classes.buy__btn}>
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
          <Line />
          <section className={classes.spec} id="spec">
            <h2>Спецификация микроскопа</h2>
            <div className={classes["table-wrap"]}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th></th>
                    {tableData.thead.map((item) => (
                      <th>{item.th}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.tbody.map((item) =>
                    item.blocks.map((item) => (
                      <tr key={item.id}>
                        {item.th && <th colSpan={3}>{item.th}</th>}
                        {item.td && (
                          <>
                            <td>{item.td[0]}</td>
                            <td>{item.td[1]}</td>
                            <td>{item.td[2]}</td>
                          </>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div className={classes.buy__btn}>
              <Button value={"Заказать"} />
            </div>
          </section>
          <Line />
        </div>
      </section>
    </main>
  );
};
