import React from "react";
import classes from "./NavbarItem.module.scss";

import { Nodes } from "../Navbar";
import classnames from "classnames";
import { Link } from "react-router-dom";

export const NavbarItem = ({ nodes }: Nodes) => {
  return (
    <ul
      className={classnames(classes["inner-menu"], {
        [classes.prod]: nodes.length === 7,
        [classes.area]: nodes.length === 13,
      })}
    >
      {nodes.map((node) => (
        <li className={classes.menu__item} key={node.id}>
          <Link to={node.route}>{node.title}</Link>
        </li>
      ))}
    </ul>
  );
};
