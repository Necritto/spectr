import React from "react";
import classes from "./NewsPage.module.scss";

import { INewsData, ISwapHeading } from "../../utils/interfaces/interfaces";
import { Pagination } from "../../components/Pagination/Pagination";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { Container } from "../../hoc/Container/Container";

interface NewsPageProps extends ISwapHeading {
  readonly newsData: ReadonlyArray<INewsData>;
}

export const NewsPage = ({
  SWAP_HEADING,
  windowWidth,
  newsData,
}: NewsPageProps): React.ReactElement => {
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
