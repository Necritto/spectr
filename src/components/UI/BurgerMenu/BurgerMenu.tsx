import React from "react";
import classes from "./BurgerMenu.module.scss";

import classnames from "classnames";
import { Link } from "react-router-dom";

import { Button } from "../Button/Button";
import { INavNodes } from "../../../utils/interfaces/interfaces";

type BurgerMenuProps = {
  readonly onCloseBurgerMenu: () => void;
  readonly navData: INavNodes;
};

export const BurgerMenu = ({
  onCloseBurgerMenu,
  navData,
}: BurgerMenuProps): React.ReactElement => {
  return (
    <div className={classes["burger-wrap"]}>
      <nav className={classes["burger-menu"]}>
        <ul>
          {navData.nodes.map((node) => (
            <li
              key={node.id}
              className={classnames({ [classes.active]: node.id === 1 })}
            >
              <Link onClick={onCloseBurgerMenu} to={node.route}>
                {node.title}
              </Link>
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
