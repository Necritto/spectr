import React from "react";
import classes from "./SearchResultsPage.module.scss";

import { ISwapHeading, ISearchData } from "../../App";
import { CarouselItem } from "../../components/Carousel/CarouselItem/CarouselItem";
import { AreasItem } from "../AreasPage/AreasItem/AreasItem";
import { MobileLogo } from "../../components/UI/MobileLogo/MobileLogo";
import { PaginationItem } from "../../components/Pagination/PaginationItem/PaginationItem";

interface SearchResultsPageProps extends ISwapHeading {
  searchData: ISearchData;
}

export const SearchResultsPage = ({
  SWAP_HEADING,
  windowWidth,
  searchData,
}: SearchResultsPageProps): React.ReactElement => {
  return (
    <main className={classes.main}>
      {windowWidth < SWAP_HEADING && <MobileLogo />}
      <section className={classes["search-res"]}>
        <div className={classes.container}>
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
        </div>
      </section>
    </main>
  );
};