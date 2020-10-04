import React from "react";
import classes from "./ProductPage.module.scss";

import { Pagination } from "../../components/Pagination/Pagination";
import { IProductsData, ISwapHeading } from "../../utils/interfaces/interfaces";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { Container } from "../../hoc/Container/Container";

interface ProductPageProps extends ISwapHeading {
  readonly productsData: ReadonlyArray<IProductsData>;
}

export const ProductPage = ({
  SWAP_HEADING,
  windowWidth,
  productsData,
}: ProductPageProps): React.ReactElement => {
  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
      <section className={classes.products}>
        <Container>
          <div className={classes.heading}>
            <div className={classes.heading__wrap}>
              <h1>Наша продукция</h1>
              <p>
                Наша продукция соответствует самым высоким мировым стандартам
                применяемым к профессиональному научному оборудованию.
              </p>
            </div>
          </div>
          <div className={classes["pagination-content"]}>
            <Pagination data={productsData} />
          </div>
        </Container>
      </section>
    </main>
  );
};
