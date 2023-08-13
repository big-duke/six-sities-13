import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';


import 'leaflet/dist/leaflet.css';
import { Location, Point } from '../../types';
import useMap from './useMap';
import { useAppSelector } from '../../hooks';
import { selectors } from '../../store';
import { defaultIcon, hoverIcon } from './const';


type MapProps = {
  center: Location;
  points: Point[];
}
function Map({ center, points}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, center);
  const hoverPointId = useAppSelector(selectors.getHoverOffer)?.id;

  useEffect(() => {
    if (map) {
      points.forEach(({ latitude, longitude , id}) => {
        leaflet
          .marker({
            lat: latitude,
            lng: longitude, })
          .setIcon(id === hoverPointId ? hoverIcon : defaultIcon)
          .addTo(map);
      });
    }
  }, [hoverPointId, map, points]);
  return (
    <div
      ref={mapRef}
      className="cities__map"
      style={{ height: '100%' }}
    >
    </div>
  );
}

export default Map;
