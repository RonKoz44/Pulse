import PropTypes from 'prop-types';
import * as e from './styles';

export default function Property({ model }) {
    return (
        <e.Container>
            <e.Title>{model.address1}</e.Title>
            <e.Address>
                {model.city}, {model.postalCode}, {model.state}
            </e.Address>

            <e.Button>View Location</e.Button>
        </e.Container>
    );
}

Property.propTypes = {
    model: PropTypes.shape({
        address1: PropTypes.string.isRequired,
        city: PropTypes.string.isrequired,
        postalCode: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }).isRequired,
};
