// Types for interfaces

type ArticleData = {
  readonly descr: ReadonlyArray<string>;
  readonly videoSrc: string;
  readonly features: ReadonlyArray<string>;
  readonly advantages: ReadonlyArray<string>;
  readonly areas: ReadonlyArray<IAreasData>;
  readonly docs: ReadonlyArray<{
    readonly id: number;
    readonly link: string;
    readonly title: string;
  }>;
  readonly docsImg: ReadonlyArray<{
    readonly id: number;
    readonly imgUrl: string;
  }>;
  readonly tableData: ITableData;
  readonly similarProducts: ReadonlyArray<IProductsData>;
};

type Node = {
  readonly id: number;
  readonly title: string;
  readonly body: string;
};

type DocsLink = {
  readonly id: number;
  readonly link: string;
  readonly title: string;
};

type Standarts = {
  readonly id: number;
  readonly title: string;
  readonly descr: ReadonlyArray<string>;
  readonly descr_item?: ReadonlyArray<string>;
  readonly descr_imgs?: ReadonlyArray<string>;
};

type NavNode = {
  readonly id: number;
  readonly title: string;
  readonly route: string;
  readonly type?: string;
  readonly nodes?: ReadonlyArray<Route>;
};

type Route = {
  readonly id: number;
  readonly title: string;
  readonly route: string;
  readonly type: string;
};

// Interfaces

export interface ISwapHeading {
  readonly SWAP_HEADING: number;
  readonly windowWidth: number;
}

export interface ISearchData {
  readonly products: Array<IProductsData>;
  readonly areas: Array<IAreasData>;
  readonly news: Array<INewsData>;
}

export interface ITableData {
  readonly thead: ReadonlyArray<{ id: number; th: string }>;
  readonly tbody: ReadonlyArray<{
    readonly blocks: ReadonlyArray<{
      readonly id: number;
      readonly th?: string;
      readonly td?: ReadonlyArray<string>;
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

export interface IAreasData {
  readonly id: number;
  readonly route?: string;
  readonly title: string;
}

export interface ISliderData {
  readonly nodes: ReadonlyArray<Node>;
}

export interface IMainData {
  readonly sliderData: ISliderData;
  readonly carouselData: ReadonlyArray<IProductsData>;
  readonly newsData: ReadonlyArray<INewsData>;
}

export interface INewsData {
  readonly id: number;
  readonly imgUrl: string;
  readonly title: string;
  readonly date: string;
}

export interface IProductsData {
  readonly id: number;
  readonly imgUrl: string;
  readonly title: string;
  readonly descr: string;
}

export interface ITeamData {
  readonly id: number;
  readonly imgUrl: string;
  readonly name: string;
  readonly position: string;
  readonly descr: string;
  readonly interests?: string;
}

export interface IAreaData {
  readonly id: number;
  readonly theme_article: string;
  readonly small_descr: string;
  readonly imgUrl: string;
  readonly descr: ReadonlyArray<string>;
  readonly descr_tasks: ReadonlyArray<string>;
  readonly docsLinks: ReadonlyArray<DocsLink>;
  readonly standarts_predescr: string;
  readonly standarts: ReadonlyArray<Standarts>;
  readonly area_products: ReadonlyArray<IProductsData>;
}

export interface INavNodes {
  readonly nodes: ReadonlyArray<NavNode>;
}
