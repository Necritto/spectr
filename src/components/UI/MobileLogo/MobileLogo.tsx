import React from "react";
import classes from "./MobileLogo.module.scss";

import { Logo } from "../../Logo/Logo";

export const MobileLogo = (): React.ReactElement => {
  return (
    <section className={classes["mobile-logo"]}>
      <div className={classes.bg}></div>
      <Logo />
    </section>
  );
};
