import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    
    & ul {
        max-width: 800px;
        padding: 0.25rem 1rem;
        
        
        li, label {
            padding: 0.25rem;
            font-weight: 300;
            letter-spacing: .09em;
        }
        .title {
            font-size: 1.5rem;
            padding: 0.25rem 1rem;
        }
        li {
            display: flex;
            flex: wrap;
            align-items: center;
            &:last-child {
                justify-content: space-around;
            }
            input{
                padding: 0.5rem 1rem;
                width: 100%;
                background: transparent;
                border: 0;
                border-bottom: 1px solid var(--dark-blue);
                color: var(--dark-blue);
            }
            button {
                margin-top: 0.5rem;
                background: var(--green);
                &.bt-remove {
                    background: var(--red);
                }
            }
        }
    }
`;  