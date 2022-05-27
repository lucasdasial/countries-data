import { useContinentStore } from "@/stores/ContinentStore";
import { IContinent } from "../entities/IContinent";
import { ICountry } from "../entities/ICountry";
import { fetchingData } from "../Graphql";

export async function filterByContinent(codeContinent: string) {
  const query = `
  query{
    continent(code: "${codeContinent}"){
      name,
      countries{
        code
        name,
        languages{
          code,
          name
        }
      }
    }
  }
  `;

  let myContinent: IContinent;

  const langs: any[] = [];
  const store = useContinentStore();

  await fetchingData(query)
    .then((res) => res.json())
    .then((ob) => {
      const t = ob.data.continent.countries;
      t.forEach((pais: any) => {
        console.log(pais.languages);
      });
    });
}

// dataContinent.forEach((countries) => {
//   countries.forEach((el: { languages: any[] }) => {
//     el.languages.forEach((lang: any) => {
//       langs.push(lang.name);
//     });
//   });
// });

// myContinent = data.data.continent;

// store.setCont(myContinent);

// let langsFilter = langs.filter((este, i) => langs.indexOf(este) === i);

//   store.setLangs(langsFilter)
