import PropTypes from 'prop-types';
import * as e from './styles';
import {useContext} from "react";

import mapCenterContext from "../../context/mapCenterContext";

export default function Property({model}) {
  const mapCenterCtx = useContext(mapCenterContext);

  const viewLocationHandler = () => {
    mapCenterCtx.updateMapCoordinates([model.coordinates.lat, model.coordinates.lng]);
  }

  return (
    <e.Container>
      <e.Title>{model.address1}</e.Title>

      <e.Address>
        {model.city}, {model.postalCode}, {model.state}
      </e.Address>

      <e.Button onClick={viewLocationHandler}>View Location</e.Button>
    </e.Container>
  );
}

Property.propTypes = {
  model: PropTypes.shape({
    address1: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    coordinates: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }),
  }).isRequired,
};
