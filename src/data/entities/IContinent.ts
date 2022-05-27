import { ICountry } from "./ICountry";

export interface IContinent {
  name: string;
  countries: Array<ICountry>;
}
