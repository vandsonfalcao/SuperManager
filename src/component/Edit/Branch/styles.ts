import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    background: rgba(100, 100, 100, 0.1);
    border-radius: 20px;

    animation: resize-from-left 1.5s ease-out;

    & ul {
        max-width: 800px;
        padding: 1.5rem;
        
        
        li, label {
            padding: 0.25rem;
            font-weight: 300;
            letter-spacing: .09em;
        }
        .title {
            font-size: 1.5rem;
        }
        li {
            display: flex;
            flex: wrap;
            align-items: center;
            input{
                padding: 0.5rem 1rem;
                width: 100%;
                background: transparent;
                border: 0;
                border-bottom: 1px solid var(--dark-blue);
                color: var(--dark-blue);
            }
            button {
                margin-top: 2rem;
                background: var(--green);
            }
        }
    }
`;  