import React from "react";
import classes from "./NavbarItem.module.scss";

import { Nodes } from "../Navbar";

export const NavbarItem = ({ nodes }: Nodes) => {
  return (
    <ul className={classes["inner-menu"]}>
      {nodes.map((node) => (
        <li className={classes.menu__item} key={node.id}>
          <a href={node.route}>{node.title}</a>
        </li>
      ))}
    </ul>
  );
};
