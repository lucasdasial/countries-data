import { useContinentStore } from "../../stores/ContinentStore";
import { fetchingData } from "../ConnectionApi";

const store = useContinentStore();
export async function loadContinentData(codeContinent: string) {
  store.setContinentCode(codeContinent);
  const query = `
  query{
    continent(code: "${codeContinent}"){
      name,
      countries{
        code
        name,
        languages{
          name
        }
      }
    }
  }
  `;

  const langs: any[] = [];
  const countries: any[] = [];

  await fetchingData(query)
    .then((res) => res.json())
    .then((ob) => {
      const allCountries = ob.data.continent.countries;
      allCountries.forEach((country: any) => {
        countries.push(country);

        country.languages.forEach((lang: { name: any }) => {
          langs.push(lang.name);
        });
      });
      const langsFilter = langs.filter(
        (current, i) => langs.indexOf(current) === i
      );

      store.setLangs(langsFilter);
      store.setCountries(countries);
    });
}
