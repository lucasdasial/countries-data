import { useContinentStore } from "../../stores/ContinentStore";
import { loadContinentData } from "../../data/query/continent-data";

const store = useContinentStore();

export function filterMoreThanOneIdiom() {
  const code = store.getContinentCode;
  loadContinentData(code);
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
  loadContinentData(code);

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
  loadContinentData(code);

  const countries: any[] = [];
  store.getCountries.forEach((c) => {
    countries.push(c);
  });
  store.setCountries(countries);
}
