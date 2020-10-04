// Types for interfaces

type ProductsData = {
  id: number;
  imgUrl: string;
  title: string;
  descr: string;
};

type AreasData = {
  id: number;
  route?: string;
  title: string;
};

type NewsData = {
  id: number;
  imgUrl: string;
  title: string;
  date: string;
};

type ArticleData = {
  readonly descr: ReadonlyArray<string>;
  readonly videoSrc: string;
  readonly features: ReadonlyArray<string>;
  readonly advantages: ReadonlyArray<string>;
  readonly areas: ReadonlyArray<AreasData>;
  readonly docs: ReadonlyArray<{
    id: number;
    link: string;
    title: string;
  }>;
  readonly docsImg: ReadonlyArray<{
    id: number;
    imgUrl: string;
  }>;
  readonly tableData: ITableData;
  readonly similarProducts: ReadonlyArray<ProductsData>;
};

// Interfaces

export interface ISwapHeading {
  SWAP_HEADING: number;
  windowWidth: number;
}

export interface ISearchData {
  products: Array<ProductsData>;
  areas: Array<AreasData>;
  news: Array<NewsData>;
}

export interface ITableData {
  thead: ReadonlyArray<{ id: number; th: string }>;
  tbody: ReadonlyArray<{
    blocks: ReadonlyArray<{
      id: number;
      th?: string;
      td?: ReadonlyArray<string>;
    }>;
  }>;
}

export interface IProductData {
  readonly id: number;
  readonly name: string;
  readonly mark: string;
  readonly productDescr: string;
  readonly imgUrl: string;
  readonly article: ArticleData;
}
