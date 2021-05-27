import styled from 'styled-components'

export const Container = styled.button`
    background: ${ props => props.background};
    height: 56px;
    border-radius: 10px;
    border: 1px solid;
    padding: 0 16px;
    color: #fff;
    width: 60%;
    font-weight: bold;
    transition: opacity 0.3s;
    font-size: 14px;
    outline: 0;
    margin-right: 12px;
    margin-top:10px;

    &:hover {
        opacity: 0.8;
    } 
      
`