import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import 'node_modules/leaflet/dist/leaflet.css';

const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

export default function MyApp({ Component, pageProps }) {
    return (
        <Container>
            <Component {...pageProps} />
        </Container>
    );
}

MyApp.propTypes = { Component: PropTypes.func.isRequired, pageProps: PropTypes.object.isRequired };
