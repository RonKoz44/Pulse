import {createContext, useState} from "react";
import PropTypes from 'prop-types';

const MapCenterContext = createContext({
  mapCoordinates: [51.505, -0.09],
  updateMapCoordinates: (newCoordinates) => {},
});

export const MapCenterProvider = (props) => {
  const [mapCoordinates, updateMapCoordinates] = useState([51.505, -0.09]);

  const updateMapCoordinatesHandler = (newCoordinates) => {
    updateMapCoordinates(newCoordinates);
  }

  return (
    <MapCenterContext.Provider value={{mapCoordinates , updateMapCoordinates: updateMapCoordinatesHandler }}>
      {props.children}
    </MapCenterContext.Provider>
  );
}

MapCenterProvider.propTypes = {children: PropTypes.any};

export default MapCenterContext;
