import React from "react";
import classes from "./BurgerMenu.module.scss";

import classnames from "classnames";

import { Nodes } from "../../Navbar/Navbar";
import { Button } from "../Button/Button";

type BurgerMenuProps = {
  onCloseBurgerMenu: () => void;
};

export const BurgerMenu = ({ onCloseBurgerMenu }: BurgerMenuProps) => {
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
      },
      {
        id: 3,
        route: "areas",
        title: "Области применения",
      },
      {
        id: 4,
        route: "news",
        title: "Новости",
      },
      {
        id: 5,
        route: "team",
        title: "Команда",
      },
      {
        id: 6,
        route: "contacts",
        title: "Контакты",
      },
    ],
  };

  return (
    <div className={classes["burger-wrap"]}>
      <nav className={classes["burger-menu"]}>
        <ul>
          {data.nodes.map((node) => (
            <li
              key={node.id}
              className={classnames({ [classes.active]: node.id === 1 })}
            >
              <a href={node.route}>{node.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={classes["burger-menu__btn"]}>
        <Button isTimes onClose={onCloseBurgerMenu} />
      </div>
    </div>
  );
};
