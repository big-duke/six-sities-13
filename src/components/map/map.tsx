import { useEffect, useRef } from 'react';
import leaflet from 'leaflet';


import 'leaflet/dist/leaflet.css';
import { Location, Point } from '../../types';
import useMap from './useMap';


type MapProps = {
  center: Location;
  points: Point[];
}
function Map({ center, points}: MapProps): JSX.Element {
  const mapRef = useRef(null);

  const map = useMap(mapRef, center);
  useEffect(() => {
    if (map) {
      points.forEach(({ latitude, longitude }) => {
        leaflet
          .marker({
            lat: latitude,
            lng: longitude, })

          .addTo(map);
      });
    }
  }, [map, points]);
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
