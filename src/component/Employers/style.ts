import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    padding: 1rem;
    >div h3 {
        color: var(--blue);
        margin-bottom: 0.5rem;
    }
`;

export const TableEmployers = styled.div`
    height: 50vh;
    table {
        position: relative;
        border-collapse: collapse; 
        border-spacing: 0;
        width: 100%;
        color: var(--dark-blue);
        thead {
            
            tr {
                th {
                    background: rgba(240,240,240, 1);
                    position: sticky;
                    top: 0;
                    padding: 1rem;
                    text-align: left;
                    font-weight: 300;
                    letter-spacing: .09em;
                    text-transform: uppercase;
                }
            }
        }
        tbody {
            tr{
                &:nth-child(2n) {
                    background: transparent;
                }
                &:nth-child(2n+1) {
                    background: rgba(37, 99, 235, 0.1);  
                }
                td {
                    padding: 0.5rem;
                    text-align: left;
                    vertical-align:middle;
                    font-size: 0.875rem;
                }
            }
        }
    }
    .tbl {
        border-radius: 20px 0 0 0;
        max-height:40vh;
        overflow-x:auto;
        margin-top: 0px;
        ::-webkit-scrollbar {
            width: 10px;
        } 
        ::-webkit-scrollbar-track {
            background: rgba(37, 99, 235, 0.1); 
        } 
        ::-webkit-scrollbar-thumb {
            background: rgba(37, 99, 235, 0.3);
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(37, 99, 235);
        }
    }


    @media screen and (max-width: 720px) {   
        table, tr, td { display: block; }
        thead { display: none; }
        td {
            padding: 4px 20px 4px 90px;
            
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
            padding: 0.5rem 1.5rem;
        }
    }
`;

export const SelectedEmployer = styled.div`
    width: 50%;
    height: 100%;
    background: lightblue;
`;

export const Employer = styled.div`
    width: 50%;
    height: 100%;
    background: lightgreen;
`;