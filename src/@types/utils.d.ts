interface ResponseList<T> {
  data: T;
  pagination: {
    _page: number;
    _limit: number;
    _totalRows: number;
  };
}

interface IParams {
  _page?: number;
  _limit?: number;
  title_like?: string;

  [key: string]: string | number;
}
