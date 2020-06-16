import styled from '@emotion/styled';

export const Container = styled.section`
    font-family: Arial, Helvetica, sans-serif;
    display: grid;
    grid-auto-flow: row;
    grid-gap: 5px;

    &:last-of-type {
        padding-bottom: 20px;
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 16px;
`;

export const Address = styled.p`
    margin: 0;
    font-size: 12px;
`;

export const Button = styled.button`
    justify-self: start;
`;
