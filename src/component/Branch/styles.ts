import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    padding: 1rem 2rem;
    >div {
        display:flex;

        @media screen and (max-width:900px){
            flex-direction: column;
            >section, >div ul svg{
                display: none;
            }
        }

        //triangle
        section {
            content: "";
            margin-top: 5rem;;
            width: 0;
            height: 0;
            position: relative;
            border-right: 35px solid rgba(100, 100, 100, 0.1);
            border-bottom: 35px solid transparent;
            /*Faz seta "apontar para baixo. Definir o valor como 'top' fará ela "apontar para cima" */
            /*Aqui entra a cor da "aba" do balão */
            border-top: 35px solid transparent;
        }
    }
    a, button{
        padding: 0.5rem 1rem;
        border-radius: 10px;
        color: #fff;
        text-transform: uppercase;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const ViewInfo = styled.div`
    padding: 1rem;
    background: rgba(100, 100, 100, 0.1);
    border-radius: 20px;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 1rem;
        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            &:first-child {
                display: flex;
                flex-direction: row;
                column-gap: 1rem;
                align-self: flex-start;
                color: var(--blue);
            }
            >svg {
                font-size: 10rem;
                color: var(--blue);
            }
            a, button {
                display: flex;
                align-items: center;
                svg {
                    color: #fff;
                    font-size: 1rem;
                    margin-right: 3px;
                }
                &.bt-back {
                    display: none;
                    background: var(--text);                
                }
                &.bt-edit {
                    background: var(--blue);
                }
            }
            strong {
                font-size: 2rem;
            }
        }
    }
`;

