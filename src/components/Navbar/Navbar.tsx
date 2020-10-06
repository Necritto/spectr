import React, { useState } from "react";
import classes from "./Navbar.module.scss";

import classnames from "classnames";
import { Link } from "react-router-dom";

import { NavbarItem } from "./NavbarItem/NavbarItem";
import { INavNodes } from "../../utils/interfaces/interfaces";

type NavbarProps = {
  readonly navData: INavNodes;
};

export const Navbar = ({ navData }: NavbarProps): React.ReactElement => {
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
        {navData.nodes.map((node) => (
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
