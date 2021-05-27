import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 10px;
    padding: 18px;
    width: 60%;
    border: 1px solid #D7D7D7;
    color: #666360; 
    display: flex;
    align-items: center;

    & + div {
        margin-top: 16px;
    }

    input {
        flex: 1;
        background: transparent;
        border: 0;
        outline: 0;

        &::placeholder {
            color: #666360;
        }
    }

    svg {
        margin-right: 16px;
    }
`

export const Span = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: #ff5752;
`