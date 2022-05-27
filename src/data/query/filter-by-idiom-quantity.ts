import { useContinentStore } from "../../stores/ContinentStore";
import { filterByContinent } from "./filter-by-continent";

const store = useContinentStore();

export function filterMoreThanOneIdiom() {
  const code = store.getContinentCode;
  filterByContinent(code);
  const countries: any[] = [];

  store.getCountries.forEach((c) => {
    if (c.languages.length > 1) {
      countries.push(c);
    }
  });
  store.setCountries(countries);
}

export function filterJustOneIdiom() {
  const code = store.getContinentCode;
  filterByContinent(code);

  const countries: any[] = [];

  store.getCountries.forEach((c) => {
    if (c.languages.length == 1) {
      countries.push(c);
    }
  });
  store.setCountries(countries);
}

export function filterAllIdioms() {
  const code = store.getContinentCode;
  filterByContinent(code);

  const countries: any[] = [];
  store.getCountries.forEach((c) => {
    countries.push(c);
  });
  store.setCountries(countries);
}
