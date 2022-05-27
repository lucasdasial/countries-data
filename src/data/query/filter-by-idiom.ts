import { useContinentStore } from "@/stores/ContinentStore";

export function filterByIdiom(nameLang: string) {
  const continentStore = useContinentStore();
  const arr: any[] = [];
  const current = continentStore.continent.countries;
  current.forEach((el) => {
    arr.push(el.languages);
  });

  console.log(arr);
}
