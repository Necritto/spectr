import React from "react";
import classes from "./AreasItem.module.scss";

import { Link } from "react-router-dom";

type AreasItemProps = {
  data: {
    id: number;
    route: string;
    title: string;
  };
};

export const AreasItem = ({ data }: AreasItemProps): React.ReactElement => {
  return (
    <button className={classes.areas__item}>
      <Link to={data.route}>{data.title}</Link>
    </button>
  );
};
