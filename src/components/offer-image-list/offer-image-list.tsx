type OfferImageListProps = {
  images:string[];
}
function OfferImageList({images}:OfferImageListProps){
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.slice(0,6).map((image) => (
          <div key={image} className="offer__image-wrapper">
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferImageList;
