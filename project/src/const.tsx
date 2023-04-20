import { City } from 'types/offers';

const AppRoute = {
  Main: '/',
  Login: '/login',
  Room: '/offer/',
} as const;

const APIRoute = {
  Offers: '/hotels',
  Login: '/login',
  Logout: '/logout',
} as const;

enum AuthorizationStatus {
  NoAuth = 'NO_AUTH',
  Auth = 'AUTH',
  Unknown = 'UNKNOWN',
}

const offerLocations: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldolf'];

const defaultCity: City = {
  'location': {
    'latitude': 48.864716,
    'longitude': 2.3488,
    'zoom': 10
  },
  'name': 'Paris'
};

const sortingOptions = {
  default: 'Popular',
  lowToHigh: 'Price: low to high',
  HightToLow: 'Price: high to low',
  raitedTop: 'Top rated first',
};

const DEFAULT_SORTING = 'Popular';

const plural = new Intl.PluralRules('eu-US');

const DEFAULT_SELECTED_CARD = -1;

export {
  AppRoute,
  APIRoute,
  AuthorizationStatus,
  offerLocations,
  defaultCity,
  sortingOptions,
  DEFAULT_SORTING,
  plural,
  DEFAULT_SELECTED_CARD,
};
