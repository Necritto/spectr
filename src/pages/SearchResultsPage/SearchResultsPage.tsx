import React, { useContext } from "react";
import classes from "./SearchResultsPage.module.scss";

import { ISearchData } from "../../utils/interfaces/interfaces";
import { CarouselItem } from "../../components/Carousel/CarouselItem/CarouselItem";
import { AreasItem } from "../AreasPage/AreasItem/AreasItem";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { PaginationItem } from "../../components/Pagination/PaginationItem/PaginationItem";
import { Container } from "../../hoc/Container/Container";
import { Context } from "../../utils/context/context";

type SearchResultsPageProps = {
  searchData: ISearchData;
};

export const SearchResultsPage = ({
  searchData,
}: SearchResultsPageProps): React.ReactElement => {
  const { SWAP_HEADING, windowWidth } = useContext(Context);

  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
      <section className={classes["search-res"]}>
        <Container>
          <div className={classes.heading}>
            <h1>Результаты поиска (8)</h1>
            <span>По запросу «%query%»</span>
          </div>
          <div className={classes.products}>
            <h2>Продукция</h2>
            <div className={classes.products__item}>
              {searchData.products.map((data) => (
                <CarouselItem key={data.id} card={data} />
              ))}
            </div>
          </div>
          <div className={classes.areas}>
            <h2>Области применения</h2>
            <div className={classes.areas__item}>
              {searchData.areas.map((data) => (
                <AreasItem key={data.id} data={data} />
              ))}
            </div>
          </div>
          <div className={classes.news}>
            <h2>Новости</h2>
            <div className={classes.news__item}>
              {searchData.news.map((data) => (
                <PaginationItem key={data.id} isNews pageData={data} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};
