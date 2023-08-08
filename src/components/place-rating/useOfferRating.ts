const STAR_COUNT = 5;
const SCALE_MAX = 100;

export const usePlaceRating = (rating:number) => {
  const width = Math.round(SCALE_MAX / STAR_COUNT * rating);
  return {
    width: `${width}%`};
};
