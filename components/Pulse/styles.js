import styled from '@emotion/styled';

export const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    width: 60vw;
    height: 60vh;
    min-width: 900px;
    max-width: 1100px;
    min-height: 500px;
    max-height: 600px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;

export const Loading = styled.div`
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    color: darkgray;
    font-size: 11px;
`;
