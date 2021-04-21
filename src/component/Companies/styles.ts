import styled from 'styled-components';

export const Container = styled.main`
    flex: 1;
    display: flex;
    flex-direction:column;
    height: 100vh;
`;

export const Tab = styled.main`
    display: flex;
    justify-content: space-between;

    background: var(--dark-blue);
    >div {
        display: flex;
        align-items: center;
        padding: 0 1rem;
        column-gap: 0.875rem;
        button {
            color: var(--shape);
            background: transparent;
            border: none;
            font-size: 1.25rem;
            &:hover {
                filter: brightness(0.8);
            }
        }
        >div {
            display: flex;
            flex-direction: column;
        }
    }
    
    >ul {
        max-width: 90vw;

        display: flex;
        column-gap: 8px;

        list-style: none; 

        padding: 1rem 1rem 0 1rem;
        overflow-x: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        
        >li{
            >button {
                padding: 1rem 2rem;
                display: flex;
                justify-content: center;
                align-items: center;

                border-radius: 15px 15px 0 0;
                border: none;

                background: var(--blue);
                color: var(--shape);

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