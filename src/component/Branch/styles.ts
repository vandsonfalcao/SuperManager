import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display:flex;
    padding: 1rem 2rem;

    @media screen and (max-width: 720px){
        flex-direction: column;
        div:first-child ul {
            border-radius: 20px 20px 0 0;
        }
        div:last-child {
            border-radius: 0 0 20px 20px;
        }
        section {
            display: none;
        }
    }
    
    //triangle
    section {
        content: "";
        margin-top: 7rem;
        width: 0;
        height: 0;
        position: relative;
        border-right: 35px solid rgba(100, 100, 100, 0.1);
        border-bottom: 35px solid transparent;
        /*Faz seta "apontar para baixo. Definir o valor como 'top' fará ela "apontar para cima" */
        /*Aqui entra a cor da "aba" do balão */
        border-top: 35px solid transparent;
    }
    a {
        display: block;
    }
    a, button{
        padding: 0.5rem 1rem;
        border-radius: 10px;
        color: #fff;
        text-transform: uppercase;
        background: var(--blue);

        &:hover {
            filter: brightness(0.9);
        }
        &.bt-back {
            display: none;
            background: var(--text);
            @media screen and (max-width:720px){
                display: block;
            }             
        }
    }
`;

export const ViewInfo = styled.div`
    >div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        h3 {
            color: var(--blue);
        }
    }
    ul {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 1rem;
        border-radius: 20px;
        background: rgba(100, 100, 100, 0.1);
        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            h3 {
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
            }
            strong {
                font-size: 2rem;
            }
        }
    }
`;

