interface IFixerServiceResponse {
  base: string;
  date: string;
  rates: { [key: string]: number };
}
