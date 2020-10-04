import React from "react";
import classes from "./Line.module.scss";

import classnames from "classnames";

type LineProps = {
  isFooter?: boolean;
};

export const Line = ({ isFooter }: LineProps): React.ReactElement => (
  <div
    className={classnames(classes.line, {
      [classes["line-footer"]]: isFooter,
    })}
  ></div>
);
