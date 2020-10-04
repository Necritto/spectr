import React, { useContext } from "react";
import classes from "./NewsPage.module.scss";

import { INewsData } from "../../utils/interfaces/interfaces";
import { Pagination } from "../../components/Pagination/Pagination";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { Container } from "../../hoc/Container/Container";
import { Context } from "../../utils/context/context";

type NewsPageProps = {
  readonly newsData: ReadonlyArray<INewsData>;
};

export const NewsPage = ({ newsData }: NewsPageProps): React.ReactElement => {
  const { SWAP_HEADING, windowWidth } = useContext(Context);

  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
      <section className={classes["news-page"]}>
        <Container>
          <div className={classes["news-wrap"]}>
            <h1>Новости и события</h1>
            <div className={classes["news-content"]}>
              <Pagination data={newsData} isNews />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
