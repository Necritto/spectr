import React from "react";
import classes from "./Header.module.scss";

import { Logo } from "../Logo/Logo";
import { Navbar } from "../Navbar/Navbar";
import { Additional } from "../Additional/Additional";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />
        <Navbar />
        <Additional />
      </div>
    </header>
  );
};
