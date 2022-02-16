import PropTypes from 'prop-types';
import * as rl from 'react-leaflet';
import {useRef, useCallback, useContext} from 'react';
import {useMount} from 'react-use';
import {createIcon, getBounds} from './utils';
import * as e from './styles';

import mapCenterContext from "../../context/mapCenterContext";

export default function Map({models}) {
  const mapCenterCtx = useContext(mapCenterContext);
  const ref = useRef();

  const handleFitBounds = useCallback(() => {
    ref.current.leafletElement.fitBounds(getBounds(models), {padding: [20, 20]});
  }, []);

  useMount(handleFitBounds);

  return (
    <e.Container>
      <rl.Map ref={ref} center={mapCenterCtx.mapCoordinates} zoom={13}>
        <rl.TileLayer url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}@2x.png"/>

        {models.map((model) => (
          <rl.Marker
            key={model.key}
            position={[model.coordinates.lat, model.coordinates.lng]}
            icon={createIcon()}
          />
        ))}
      </rl.Map>

      <e.Button onClick={handleFitBounds}>Reset View</e.Button>
    </e.Container>
  );
}

Map.propTypes = {
  models: PropTypes.arrayOf(
    PropTypes.shape({
      coordinates: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
};
