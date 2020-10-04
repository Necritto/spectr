import React from "react";
import classes from "./NavbarItem.module.scss";

import classnames from "classnames";
import { Link } from "react-router-dom";

import { Nodes } from "../Navbar";

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
          {node.type === "prod_nodes" ? (
            <Link to={`/products/${node.route}`}>{node.title}</Link>
          ) : node.type === "areas_nodes" ? (
            <Link to={`/areas/${node.route}`}>{node.title}</Link>
          ) : (
            <Link to={node.route}>{node.title}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};
