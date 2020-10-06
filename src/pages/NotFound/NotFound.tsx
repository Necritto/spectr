import React, { useContext } from "react";
import classes from "./NotFound.module.scss";

import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { Context } from "../../utils/context/context";

export const NotFound = (): React.ReactElement => {
  const { SWAP_HEADING, windowWidth } = useContext(Context);

  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
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
