import PropTypes from 'prop-types';
import axios from 'axios';
import Pulse from '@app/Pulse';

export default function Index({ properties }) {
    return <Pulse models={properties} />;
}

Index.getInitialProps = async () => {
    const instance = axios.create({ baseURL: 'http://localhost:3000' });
    return { properties: (await instance.get('/api/properties')).data };
};

Index.propTypes = { properties: PropTypes.array.isRequired };
