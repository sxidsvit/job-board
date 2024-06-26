// react-country-state-city.d.ts

// This file declares the types for the react-country-state-city package.
// It is intended to be used with TypeScript to provide type checking for the library.

export type Country = {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
  numeric_code: string;
  phone_code: number;
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  native: string;
  region: string;
  subregion: string;
  emoji: string;
  emojiU: string;
  tld: string;
  latitude: string;
  longitude: string;
};

export type GetCountriesT = () => Promise<Country[]>;

export type State = {
  id: number;
  name: string;
  state_code: string;
  latitude: string;
  longitude: string;
};

export type GetStateT = (country: Country) => Promise<State[]>;

export type City = {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
};

export type GetCityT = (state: State) => Promise<City[]>;

export type Language = {
  code: string;
  name: string;
  native: string;
};

export type GetLanguages = () => Promise<Language[]>;
