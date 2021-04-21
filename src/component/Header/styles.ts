import styled from 'styled-components';

export const Container = styled.header`
    width: 100vw;

    display: flex;
    justify-content: center;
    
    background: var(--dark-blue);

    >div {
        width: 90%;
        margin: 2rem 0 3rem 0;
        display: flex;
        justify-content: space-between;
        color: var(--shape);
        @media screen and (max-width: 560px){
            flex-direction:column;
            >div {
                margin-bottom: 1rem;
            }
        }
        >div {
            display: flex;
            align-items: center;
            >svg {
                font-size: 2.5rem;
                margin-right: 0.25rem;
            }
        }
    }
`;