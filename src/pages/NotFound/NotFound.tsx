import React from "react";
import classes from "./NotFound.module.scss";

import { ISwapHeading } from "../../App";
import { Logo } from "../../components/Logo/Logo";

export const NotFound = ({ SWAP_HEADING, windowWidth }: ISwapHeading) => {
  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && (
        <>
          <section className={classes["product-logo"]}>
            <div className={classes.bg}></div>
            <Logo />
          </section>
        </>
      )}
      <section className={classes["not-found"]}>
        <h1>Такой страницы нет</h1>
        <p>
          Какая досада. <a href="mailto:example@mail.com">Свяжитесь с нами</a>,
          и мы обязательно исправим эту ситуацию.
        </p>
      </section>
    </main>
  );
};
