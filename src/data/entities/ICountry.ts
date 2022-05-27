type lang = {
  name: string;
};

export interface ICountry {
  code: string;
  name: string;
  languages: Array<lang>;
}
