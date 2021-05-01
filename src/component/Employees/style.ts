import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    padding: 1rem;
    >div:first-child {
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
    }
    >div:nth-child(2) {
        padding: 0.5rem 0;
        display: flex;
        column-gap: 1rem;
    }
    h3 {
        color: var(--blue);
    }
    a {
        display: block;
    }
    a, button{
        padding: 0.25rem 1rem;
        border-radius: 10px;
        color: #fff;
        text-transform: uppercase;
        background: var(--blue);

        &:hover {
            filter: brightness(0.9);
        }
        &.bt-back {
            background: var(--text);             
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
`;












export const TableEmployees = styled.div`
    table {
        position: relative;
        border-collapse: collapse; 
        border-spacing: 0;
        width: 100%;
        color: var(--dark-blue);
        thead {
            tr {
                th {
                    background: var(--shape);
                    position: sticky;
                    top: 0;
                    padding: 0.5rem;
                    text-align: left;
                    font-weight: 300;
                    letter-spacing: .09em;
                    text-transform: uppercase;
                }
            }
        }
        tbody {
            tr{
                transition: all 0.2s;
                &:nth-child(2n) {
                    background: transparent;
                }
                &:nth-child(2n+1) {
                    background: rgba(37, 99, 235, 0.1);  
                }
                &:hover {
                    color: #fff;
                    background: var(--blue);
                }
                td {
                    padding: 0.25rem;
                    text-align: left;
                    vertical-align:middle;
                    font-size: 0.875rem;
                }
            }
        }
    }
    .tbl {
        border-radius: 20px 0 0 0;
        max-height:30vh;
        overflow-x:auto;
        margin-top: 0px;
    }


    @media screen and (max-width: 720px) {   
        table, tr, td { display: block; }
        thead { display: none; }
        td {
            padding: 0.25rem 2rem 0.25rem 8rem;

            &:before {
                content: '';
                display: block;
                float: left;
                width: 20%;
            }

            &:nth-child(1):before { content: 'Name:'; }
            &:nth-child(2):before { content: 'Email:'; }
            &:nth-child(3):before { content: 'CPF:'; }
            &:nth-child(4):before { content: 'Phone 1:'; }
            &:nth-child(5):before { content: 'Phone 2:'; }
        }
        
        tr {
            overflow-x: hidden;
            width: 86.5vw;
            padding: 0.25rem 1.5rem;
        }
        .tbl {
            max-height: 85vh;
        }
    }
`;












export const SelectedEmployee = styled.div`
    >header:first-child {
        padding: 0.5rem 1rem;
        display: flex;
        justify-content: space-between;
        a {
            display: none;
            @media screen and (max-width: 720px){
                display: block;
            }
        }
    }
    >div {
        display: flex;
        background: var(--shape);
        border-radius: 20px;

        @media screen and (max-width: 720px) {
            flex-direction: column;
        }
    }
`;

export const EmployeeDevices = styled.div`
    flex: 1;
    >ul {
        padding: 0.5rem;
        max-height: 38vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
        overflow-y: auto;

        @media screen and (max-width: 720px) {
            max-height: 45vh;
        }

        li{
            padding: 1rem;
            color: var(--dark-blue);
            border-radius: 20px;
            border: 1px solid var(--blue);
            >div {
                text-align: center;
                span {
                    font-size: 0.875rem;
                    margin-right: 0.5rem;
                }
                &:last-child {
                    display: flex;
                    justify-content: space-between;
                    >div {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        svg {
                            width: 80px;
                            height: 80px;
                            background: var(--blue);
                            border-radius: 3px;
                        }
                        div {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 60px;
                            height: 60px;
                            border: 5px solid var(--green);
                            border-radius: 100%;
                        }
                        span {
                            color: darkorange;
                        }
                    }
                }
            }   
        }
    }
`;