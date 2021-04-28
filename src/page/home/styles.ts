import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    ul{
        list-style: none;
    }
    button {
        border: 0;
    }
`;

export const Content = styled.div`
    display: flex;
    @media screen and (max-width: 1080px){
        flex-direction: column;
    }
`;