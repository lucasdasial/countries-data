import { useContinentStore } from "@/stores/ContinentStore";
import { filterByContinent } from "./filter-by-continent";

const store = useContinentStore();

export function filterByIdiom(nameLang: string) {
  const code = store.getContinentCode;
  filterByContinent(code);
  console.log(store.getCountries);

  const countries: any[] = [];
  store.getCountries.forEach((c) => {
    c.languages.forEach((lang: any) => {
      if (lang.name == nameLang) {
        console.log(c.name);
        countries.push(c);
      }
    });
  });
  store.setCountries(countries);
  console.log(store.getCountries);
}
