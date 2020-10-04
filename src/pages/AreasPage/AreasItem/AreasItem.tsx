import React from "react";
import classes from "./AreasItem.module.scss";

import { Link } from "react-router-dom";
import classnames from "classnames";
import { IAreasData } from "../../../utils/interfaces/interfaces";

type AreasItemProps = {
  data: IAreasData;
};

export const AreasItem = ({ data }: AreasItemProps): React.ReactElement => {
  return (
    <button
      className={classnames(classes.areas__item, {
        [classes["areas__item-disabled"]]: !data.route,
      })}
    >
      {data.route ? (
        <Link to={`/areas/${data.route}`}>{data.title}</Link>
      ) : (
        <span>{data.title}</span>
      )}
    </button>
  );
};
