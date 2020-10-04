import React, { useState } from "react";
import classes from "./Navbar.module.scss";

import { NavbarItem } from "./NavbarItem/NavbarItem";
import classnames from "classnames";
import { Link } from "react-router-dom";

type Node = {
  id: number;
  title: string;
  route: string;
  type?: string;
  nodes?: Array<Route>;
};

type Route = {
  id: number;
  title: string;
  route: string;
  type: string;
};

export type Nodes = {
  nodes: Array<Node>;
};

export const Navbar = () => {
  const data: Nodes = {
    nodes: [
      {
        id: 1,
        route: "/main",
        title: "Главная",
      },
      {
        id: 2,
        route: "/products",
        title: "Продукция",
        type: "prod_nodes",
        nodes: [
          {
            id: Math.random(),
            route: "r532",
            title: "ИнСпектр R532",
            type: "prod_nodes",
          },
          {
            id: Math.random(),
            route: "m532",
            title: "РамМикс М532",
            type: "prod_nodes",
          },
          {
            id: Math.random(),
            route: "sersp",
            title: "SERS подложки",
            type: "prod_nodes",
          },
          {
            id: Math.random(),
            route: "diff",
            title: "Разделитель смесей",
            type: "prod_nodes",
          },
          {
            id: Math.random(),
            route: "l405",
            title: "ИнСпектр L405",
            type: "prod_nodes",
          },
          {
            id: Math.random(),
            route: "f1200",
            title: "ИнСпектр F1200®",
            type: "prod_nodes",
          },
          {
            id: Math.random(),
            route: "software",
            title: "Программное обеспечение",
            type: "prod_nodes",
          },
        ],
      },
      {
        id: 3,
        route: "/areas",
        title: "Области применения",
        type: "areas_nodes",
        nodes: [
          {
            id: Math.random(),
            route: "biotech",
            title: "Биотехнологии",
            type: "areas_nodes",
          },
          {
            id: Math.random(),
            route: "lowkp",
            title: "Низкочастотная КР-спектроскопия",
            type: "areas_nodes",
          },
          {
            id: Math.random(),
            route: "learnkp",
            title: "Обучение КР-спектроскопии",
            type: "areas_nodes",
          },
          {
            id: Math.random(),
            route: "sers",
            title: "SERS-аналитика",
            type: "areas_nodes",
          },
          {
            id: Math.random(),
            route: "spectr",
            title: "Спектральные маркеры",
            type: "areas_nodes",
          },
          {
            id: Math.random(),
            route: "pharma",
            title: "Фармацевтика",
            type: "areas_nodes",
          },
          {
            id: Math.random(),
            route: "gemmol",
            title: "Геммология",
            type: "areas_nodes",
          },
          {
            id: Math.random(),
            route: "geolog",
            title: "Геология",
            type: "areas_nodes",
          },
          {
            id: Math.random(),
            route: "crime",
            title: "Криминалистика",
            type: "areas_nodes",
          },
          {
            id: Math.random(),
            route: "chimic",
            title: "Химия",
            type: "areas_nodes",
          },
          {
            id: Math.random(),
            route: "med",
            title: "Медицина",
            type: "areas_nodes",
          },
          {
            id: Math.random(),
            route: "halphpr",
            title: "Полупроводники",
            type: "areas_nodes",
          },
          {
            id: Math.random(),
            route: "art",
            title: "Искусство",
            type: "areas_nodes",
          },
        ],
      },
      {
        id: 4,
        route: "/news",
        title: "Новости",
      },
      {
        id: 5,
        route: "/team",
        title: "О компании",
        type: "company_nodes",
        nodes: [
          {
            id: Math.random(),
            route: "/team",
            title: "Команда",
            type: "company_nodes",
          },
          {
            id: Math.random(),
            route: "/contacts",
            title: "Контакты",
            type: "company_nodes",
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
      setIsClicked(true);
    }

    if (displayChild === id) {
      setIsClicked(!isClicked);
    }

    setDisplayChild(id);
  };

  return (
    <nav className={classes.menu}>
      <ul className={classes["outer-menu"]}>
        {data.nodes.map((node) => (
          <li
            className={classnames(classes.menu__item, {
              [classes["menu__item-add"]]: node.nodes,
            })}
            key={node.id}
          >
            <Link to={node.route}>{node.title}</Link>
            {node.nodes && (
              <span
                onClick={() => onClickHandler(!!node.nodes, node.id)}
                className={classnames(null, {
                  [classes.open]: isClicked && displayChild === node.id,
                })}
              ></span>
            )}
            {node.nodes && isClicked && displayChild === node.id && (
              <NavbarItem nodes={node.nodes} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
