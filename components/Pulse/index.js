import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Properties from '@app/Properties';
import * as e from './styles';
import {MapCenterProvider} from "../../context/mapCenterContext";

const Map = dynamic(() => import('@app/Map'), {
  ssr: false,
  loading: () => <e.Loading>Loading Map&hellip;</e.Loading>,
});

export default function Pulse({models}) {
  return (
    <MapCenterProvider>
      <e.Container>
        <Map models={models}/>
        <Properties models={models}/>
      </e.Container>
    </MapCenterProvider>
  );
}

Pulse.propTypes = {models: PropTypes.array.isRequired};
