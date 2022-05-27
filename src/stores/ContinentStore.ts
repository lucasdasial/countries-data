import { defineStore } from "pinia";

type stateContinent = {
  _countries: Array<any>;
  _continent: string;
  _langsFilter: Array<string>;
};

export const useContinentStore = defineStore({
  id: "continent",

  state: () => {
    return {
      _countries: [""],
      _continent: "",
      _langsFilter: [""],
    } as stateContinent;
  },

  getters: {
    getContinentCode(): string {
      return this._continent;
    },

    getLangs(): Array<string> {
      return this._langsFilter;
    },
    getCountries(): Array<any> {
      return this._countries;
    },
  },

  actions: {
    setCountries(country: any[]) {
      this._countries = country;
    },
    setContinentCode(code: string) {
      this._continent = code;
    },

    setLangs(langs: Array<string>) {
      this._langsFilter = langs;
    },
  },
});
