import { City } from './types';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  HTTP404='/page-not-found',
  HTTP500='/out-of-service'
}
export enum APIRoute {
  Offers = '/offers',
  Offer = '/offers/:id',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Nearby = '/nearby',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RatingSettings = {
  starCount: 5,
  scaleMax: 100,
};

export enum SortOption {
  Popular = 'Popular',
  PriceFromLowToHigh = 'Price: low to high',
  PriceFromHighLow = 'Price: high to low',
  Rating = 'Top rated first',
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}


export const cities: City[] = [
  {
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 12
    },
    name: CityName.Paris,
  },
  {
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 12
    },
    name: CityName.Cologne,
  },
  {
    location: {
      latitude: 50.8505,
      longitude: 4.3488,
      zoom: 12
    },
    name: CityName.Brussels,
  },
  {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 12
    },
    name: CityName.Amsterdam,
  },
  {
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 12
    },
    name: CityName.Hamburg,
  },
  {
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 12
    },
    name: CityName.Dusseldorf,
  },
];
