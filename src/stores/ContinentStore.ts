import { IContinent } from "@/data/entities/IContinent";
import { ICountry } from "@/data/entities/ICountry";
import { defineStore } from "pinia";

type stateContinent = {
  _continent: IContinent;
  _langs: Array<string>;
};

export const useContinentStore = defineStore({
  id: "continent",

  state: () => {
    return {
      _continent: {},
      _langs: [""],
    } as stateContinent;
  },

  getters: {
    continent(): IContinent {
      return this._continent;
    },

    getLangs(): Array<string> {
      return this._langs;
    },
  },

  actions: {
    setCont(continent: IContinent) {
      this._continent = continent;
    },

    setLangs(langs: Array<string>) {
      this._langs = langs;
    },
  },
});
