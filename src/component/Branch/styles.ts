import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    //image + triangle
    >div {
        display:flex;
        >svg {
            font-size: 15rem;
            color: var(--blue);
        }
        //triangle
        section {
            margin-top:3rem;
            content: "";
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
`;

export const Detail = styled.form`
    padding: 1rem;
    flex: 1;
    background: rgba(100, 100, 100, 0.1);
    border-radius: 20px;

    >div {
        margin-bottom: 0.5rem;
        input[type="text"]{
            padding: 0.5rem 1rem;
            margin-bottom: 0.25rem;
            background: transparent;
            border: 0;
            border-bottom: 3px solid #fff;
            color: var(--dark-blue);
        } 
        input[type="text"].title {
            font-size: 2rem;
        }
        svg {
            color: var(--blue);
            font-size: 2rem;
        }  
        label.target {
            margin-left: 2rem;
        }
        button {
            padding: 0.5rem 2rem;
            border-radius: 10px;
            color: #fff;
            margin-right: 1rem;
            &:hover {
                filter: brightness(0.9);
            }
            &.bt-back {
                background: var(--text);                
            }
            &.bt-edit {
                background: var(--blue);
            }
            &.bt-save {
                background: var(--green);
            }
            &.bt-cancel {
                background: var(--red);
            }
        }
    }
    
`;

export const Content = styled.div`
    height: 200px;
`;