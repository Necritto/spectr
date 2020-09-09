import React, { useState } from "react";
import classes from "./Navbar.module.scss";

import { NavbarItem } from "./NavbarItem/NavbarItem";

type Node = {
  id: number;
  title: string;
  route: string;
  nodes?: Array<Route>;
};

type Route = {
  id: number;
  title: string;
  route: string;
};

export type Nodes = {
  nodes: Array<Node>;
};

export const Navbar = () => {
  const data: Nodes = {
    nodes: [
      {
        id: 1,
        route: "main",
        title: "Главная",
      },
      {
        id: 2,
        route: "products",
        title: "Продукция",
        nodes: [
          {
            id: Math.random(),
            route: "r532",
            title: "ИнСпектр R532",
          },
          {
            id: Math.random(),
            route: "m532",
            title: "РамМикс М532",
          },
          {
            id: Math.random(),
            route: "sersp",
            title: "SERS подложки",
          },
          {
            id: Math.random(),
            route: "diff",
            title: "Разделитель смесей",
          },
          {
            id: Math.random(),
            route: "l405",
            title: "ИнСпектр L405",
          },
          {
            id: Math.random(),
            route: "f1200",
            title: "ИнСпектр F1200®",
          },
          {
            id: Math.random(),
            route: "software",
            title: "Программное обеспечение",
          },
        ],
      },
      {
        id: 3,
        route: "areas",
        title: "Области применения",
        nodes: [
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
        ],
      },
      {
        id: 4,
        route: "news",
        title: "Новости",
      },
      {
        id: 5,
        route: "about",
        title: "О компании",
        nodes: [
          {
            id: Math.random(),
            route: "team",
            title: "Команда",
          },
          {
            id: Math.random(),
            route: "contacts",
            title: "Контакты",
          },
        ],
      },
    ],
  };

  const [isClicked, setIsClicked] = useState(false);
  const [displayChild, setDisplayChild] = useState<number>();

  const onClickHandler = (isNodes: boolean, id: number): void => {
    setIsClicked(false);

    if (isNodes) {
      setIsClicked(!isClicked);
    }

    setDisplayChild(id);
  };

  return (
    <nav className={classes.menu}>
      <ul className={classes["outer-menu"]}>
        {data.nodes.map((node) => (
          <li
            className={classes.menu__item}
            key={node.id}
            onClick={() => onClickHandler(!!node.nodes, node.id)}
          >
            <a href={node.route}>{node.title}</a>
            {node.nodes && isClicked && displayChild === node.id && (
              <NavbarItem nodes={node.nodes} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
