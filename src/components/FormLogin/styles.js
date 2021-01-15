import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: ContentForm;
  margin-top: 30%;

  > label {
    margin: 20px 0px;
    font-size: 14px;
    color: var(--gray-font-color);
    font-weight: bold;
  }
`;

export const InputText = styled.input`
  background: var(--white);
  border-radius: 10px;
  padding-left: 20px;

  margin-bottom: 15px;
  color: var(--outline);
  max-width: 467px;
  width: 100%;
  height: auto;
  font-size: 14px;
  line-height: 28px;
  height: 39px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(104, 104, 104, 0.2);

  :hover,
  :focus {
    outline: none;
    border: 1px solid rgba(104, 104, 104, 0.2);
    box-shadow: 0px 4px 4px var(--hover-light-shadow);
  }
`;

export const ButtonSingIn = styled.div`
  background-color: var(--verde-skytef);
  cursor:pointer;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  max-width: 467px;
  height: 39px;
  width: 100%;
  padding-top: 8px;

  font-weight: bold;
  color: white;


  :hover{
    opacity:0.7
  }
`;


export const ForgetPwd = styled.div`
  cursor:pointer;
  margin-top: 20px;
  font-size:14px;
  color: var(--azul-skytef);
`;