import PropTypes from 'prop-types';
import axios from 'axios';
import Pulse from '@app/Pulse';
import {io} from 'socket.io-client';
import {useEffect, useState} from "react";

export default function Index({properties}) {
  const [allProperties, setAllProperties] = useState(properties);

  useEffect(() => {
    const webSocket = io();
    webSocket.on('property', (websocketMessage) => {
      const newProperty = websocketMessage.message.model;
      const propertyAlreadyExists = allProperties.find(property => property.postalCode === newProperty.postalCode);

      if (propertyAlreadyExists) {
        setAllProperties(oldProperties => [{
          ...websocketMessage.message.model,
          key: Math.random() * 1000
        }, ...oldProperties]);
      } else {
        setAllProperties(oldProperties => [...oldProperties, {
          ...websocketMessage.message.model,
          key: Math.random() * 1000
        }]);
      }
    })
  }, [setAllProperties])

  return <Pulse models={allProperties}/>;
}

Index.getInitialProps = async () => {
  const instance = axios.create({baseURL: 'http://localhost:3000'});
  const properties = (await instance.get('/api/properties')).data;
  const propertiesWithKey = properties.map(property => ({
    ...property,
    key: Math.random() * 1000
  }));
  return {properties: propertiesWithKey};
};

Index.propTypes = {properties: PropTypes.array.isRequired};
