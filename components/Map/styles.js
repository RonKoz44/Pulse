import styled from '@emotion/styled';

export const Container = styled.section`
    position: relative;

    .leaflet-container {
        height: 100%;
        width: 100%;
    }

    .property {
        border-radius: 50%;
        background-color: green;
    }
`;

export const Button = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1001;
`;
