import PropTypes from 'prop-types';
import axios from 'axios';
import Pulse from '@app/Pulse';

export default function Index({ properties }) {
    return <Pulse models={properties} />;
}

Index.getInitialProps = async () => {
    const { data: properties } = await axios.get('http://localhost:3000/api/properties');

    return { properties };
};

Index.propTypes = { properties: PropTypes.array.isRequired };
