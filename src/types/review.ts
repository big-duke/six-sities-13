export type Review = {
  id: string;
  user: User;
  rating: number;
  comment: string;
  date: string;
};

type User = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
};
