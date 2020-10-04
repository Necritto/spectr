import React from "react";
import classes from "./Container.module.scss";

type ContainerProps = {
  readonly children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps): React.ReactElement => {
  return <div className={classes.container}>{children}</div>;
};
