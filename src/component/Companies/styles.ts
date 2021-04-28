import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction:column;
`;

export const Tab = styled.section`
    display: flex;
    justify-content: space-between;

    background: var(--dark-blue);
    button {
        color: var(--shape);
        background: transparent;

    }
    >div {
        display: flex;
        align-items: center;
        padding: 0 0.25rem;
        column-gap: 0.25rem;
        button {
            align-items: center;
            font-size: 2rem;
            &:hover {
                filter: brightness(0.8);
            }
        }
    }
    
    >ul {
        display: flex;
        max-width: 90vw;

        column-gap: 8px;

        padding: 1rem 1rem 0 1rem;
        overflow-x: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        >li{
            >button {
                padding: 1rem 2rem;
                justify-content: center;
                align-items: center;

                border-radius: 15px 15px 0 0;

                background: var(--blue);

                transition: transform 0.4s;

                &.selected {
                transform: scale(1.1) translateY(-2px);
                background: var(--background);
                color: var(--blue);
                font-weight: 600;
                margin: 0 10px;
                }

                &:hover {
                    transform: scale(1.1) translateY(-2px);
                }
            }
        }
    }
`;