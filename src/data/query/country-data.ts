import { useCountryStore } from "../../stores/CountryStore";
import { fetchingData } from "../ConnectionApi";

const countryStore = useCountryStore();

export async function loadCountryData(codeCountry: string | string[]) {
  console.log(codeCountry);

  const query = `
  query{
    country(code: "${codeCountry}"){
      name,
      capital,
      currency,
      phone,
      languages{
        name
      }
    }
    },
    `;

  await fetchingData(query)
    .then((res) => res.json())
    .then((ob) => {
      const currentCountry = ob.data.country;
      countryStore.setCountry(currentCountry);
      console.log(countryStore.getCountry);
    });
}
