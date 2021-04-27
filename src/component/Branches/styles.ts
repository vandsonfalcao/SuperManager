import BranchLogo from '../../assets/Branch.png'
import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 1rem 2rem;
`;

export const Content = styled.div`
    flex: 1;
    >div {
        margin-bottom: 1rem;
        button{
            margin-right:2rem;
            color: #fff;
            padding: 0.5rem 2rem; 
            border-radius: 5px;
            background: var(--blue);
            @media screen and (max-width: 520px){
                margin-right:0.5rem;
                padding: 0.5rem 1.25rem;
            }
            &:hover {
                filter: brightness(0.9);
            }
            &.bt-find {
                border-radius: 0 5px 5px 0;
            }
            &.bt-add {
                background: var(--green);
            }
        }
        input[type=text]{
            padding: 0.5rem 2rem;
            border: none;
            border-radius: 5px;
            background: var(--shape);
        }
    }
    >ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem 1.5rem;
        @media screen and (max-width: 1080px){
            grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (max-width: 720px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 520px){
            grid-template-columns: 1fr;
        }
        li {
            display: flex;
            flex-direction: column;
            align-items: center;

            padding: 0.5em 0;

            border: 1px solid transparent;
            border-radius: 10px;
            box-shadow: 5px 5px 10px rgba(0,0,0,0.5);

            background: url(${BranchLogo}) no-repeat;
            background-size: 100px 100px;
            background-position: 220px 10px;

            transition: border 0.2s;
            h4{
                color: var(--dark-blue);
                display: inline-block;
                text-align: center;
            }
            &:hover {
                border: 1px solid var(--blue);
            }
            >div {
                @media screen and (max-width: 800px){
                    display: flex;
                    flex-direction: column;
                }
                button{
                    margin: 0.25rem 5px 0.25rem 0;
                    color: #fff;
                    padding: 0.5rem 2rem; 
                    border-radius: 5px;
                    background: var(--blue);
                    &:hover {
                        filter: brightness(0.9);
                    }
                    &.bt-remove-active{
                        background: var(--red);
                    }
                }
            }
        }
    }
`;