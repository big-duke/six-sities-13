import { CityName } from '../const';

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type OfferDetail = Offer & {
  description: string;
  bedrooms: number;
  goods: [string];
  host: Host;
  images: [string];
  maxAdults: number;
};

export type City = {
  name: CityName;
  location: Location;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Point = Omit<Location, 'zoom'> & {
  id: string;
};

