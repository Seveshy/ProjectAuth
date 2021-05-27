import styled from 'styled-components'


export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Title = styled.div `
    width: 100%;

    padding: 28px;
    display: flex;
    justify-content: flex-start;

    h1 {
        color: #7B7B7B;
    }
`

export const WrapperContent = styled.div `
    width: 700px;
    display: flex;
    flex-direction: column;
    padding: 28px; 

    div {
        margin: 12px 0;
    }
`

export const WrapperButton = styled.div `
    height: 29vh;
    align-items: flex-end; 
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 18px 0 ;

    div {
        width: 30%;
        margin-right: 14px;
    }
`

export const Label = styled.label `
    color: #5C5C5C;
    font-size: 18px;
    font-weight: bold;
`

export const Figure = styled.figure `
    width: 100%;
    display: flex;
    justify-content: center;
    
    > img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }   

`