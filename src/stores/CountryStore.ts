import { defineStore } from "pinia";

type Languages = {
  name: string;
};

type Country = {
  name: string;
  capital: string;
  currency: string;
  phone: string;
  languages: Array<Languages>;
};

type stateCountry = {
  _country: Country;
};

export const useCountryStore = defineStore({
  id: "country",

  state: () => {
    return {
      _country: {},
    } as stateCountry;
  },

  getters: {
    getCountry(): Country {
      return this._country;
    },
  },

  actions: {
    setCountry(country: Country) {
      this._country = country;
    },
  },
});
