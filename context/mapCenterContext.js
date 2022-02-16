import {createContext, useState} from "react";
import PropTypes from 'prop-types';

const defaultMapCoordinates = [51.505, -0.09];

const MapCenterContext = createContext(defaultMapCoordinates);

export const MapCenterProvider = (props) => {
  const [mapCoordinates, UpdateMapCoordinates] = useState(defaultMapCoordinates);

  return (
    <MapCenterContext.Provider value={{mapCoordinates, UpdateMapCoordinates}}>
      {props.children}
    </MapCenterContext.Provider>
  );
}

MapCenterProvider.propTypes = {children: PropTypes.any};

export default MapCenterContext;
