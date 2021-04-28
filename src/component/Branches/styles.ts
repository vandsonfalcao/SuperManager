import styled from 'styled-components';

export const Container = styled.div`
    max-width: 30%;
    padding: 1rem 0;
    display: flex;
    a {
        display: block;
    }
    button, a{
        padding: 0.5rem 1rem; 
        color: #fff; 
        border-radius: 5px;
        background: var(--blue);
        &:hover {
            filter: brightness(0.9);
        }
        &.bt-add {
            margin: 0.25rem 0;
            width: 100%;
            background: var(--green);
        }
        &.bt-remove-active{
            background: var(--red);
        }
    }
    .hidden {
        padding: 0;
        overflow: hidden;
        width: 0;
    }
`;

export const TableView = styled.div`
    width: 100%;
    padding: 0 1rem 0 1rem;
    transition: all 1.5s;
    h3 {
        color: var(--blue);
    }
    input[type=text]{
        width: 100%;
        padding: 0.5rem 2rem;
        border: none;
        border-radius: 5px;
        background: var(--shape);
    }
    >table {
        display: block;
        border-spacing: 0;
        max-height: 490px;
        overflow-y: scroll;
        color: var(--dark-blue);
        tr {     
            &:nth-child(2n) {
                background: transparent;
            }
            &:nth-child(2n+1) {
                background: rgba(37, 99, 235, 0.1);  
            }
        }
        td {
            max-width:80%;
            text-align: center;
            vertical-align: middle;
            &:last-child {
                width: 20%;
            }
            button, a {
                font-size: 0.813rem;
                margin: 0.25rem;
                width: 90%;
                padding: 0.25rem;
            }
        }
    }
`;
export const ToogleHidden = styled.div`
    button {
        height: 100%;
        border-radius: 5px 0 0 5px;
        padding: 0.5rem; 
        &.bt-toogle {
            border-radius: 0 5px 5px 0;
        }
    }
`;