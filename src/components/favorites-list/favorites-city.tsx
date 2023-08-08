type FavoritesCityProps = {
name:string;
}
function FavoritesCity({name}:FavoritesCityProps):JSX.Element {
  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{name}</span>
        </a>
      </div>
    </div>
  );

}
export default FavoritesCity;
