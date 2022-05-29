import { useContinentStore } from "../../stores/ContinentStore";
import { loadContinentData } from "../../data/query/continent-data";
const store = useContinentStore();

export function filterByIdiom(nameLang: string) {
  const code = store.getContinentCode;
  loadContinentData(code);
  console.log(store.getCountries);

  const countries: Array<any> = [];
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
