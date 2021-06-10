import styled from 'styled-components';
import { Label } from '../styles';


export const Content = styled.div`
    margin-top: 24px;
    
    input { 
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: bold;
        font-size: 1rem;

        &::placeholder {
            color: #969CB3;
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: linear-gradient( 136deg,var(--azul-skytef) 0%,var(--verde-skytef) 100%); 
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`


export const FormTitleModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        color: var(--azul-skytef);
    }

    svg {
        cursor: pointer;
    }
`


export const WrapperAdd = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 24px;

    svg {
        cursor: pointer;
    }
`