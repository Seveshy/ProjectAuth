import styled, {css} from "styled-components";

import {
  EditAlt, CancelIcon
} from '../../styles/Icons';

export const Container = styled.div`

  display: grid;
   grid-template-columns:250px  auto;

   grid-template-areas:
   
    'SM CONTENT';
height: 100%;
`;

const iconCSS = css`

  cursor:pointer;
  width: 30px;
  height: 30px;
  color: var(--azul-skytef);
  :hover{
    background-color:var(--mascara);
  }
`;



export const HeaderDetail   = styled.div`
 
 width:100%;
  display:grid;
  grid-template-columns: auto auto;
  label{
    font-size: 24px;
    color:var(--azul-skytef);
    font-weight:bold;
    justify-self:start;
  }
`;

export const SideMenu = styled.div`
 padding-top:40px;
  grid-area: SM;
  display:flex;
  text-align:center;
  height:100%;
  background-color:var(--hover-light-shadow);
  .links{
   
    color: var(--white);
    text-decoration:none;
    font-size:18px;
    font-weight:lighter;
    width:250px;
    padding:20px;
    /* text-align:center;
    align-self:center;
    justify-self:center; */
    
  }
  li:hover{
    text-align:center;
    align-self:center;
    justify-self:center;
    font-weight:bold;
    background-color: var(--mascara);
  }
  .links:hover{
    font-size:20px;
    
   
  }

`;
export const Line = styled.div`
  width:auto;
  height:0.1px;
  background-color: #d9d7d7;
`;
export const Content = styled.div`
  padding:10px 40px ;
  box-shadow: 1px 2px 2px 1px var(--border);
  grid-area: CONTENT;
  display:flex;
  flex-direction:column;
  
  background-color:var(--white);
  .sub-title{
    color:var(--azul-skytef);
    font-weight:bold;
    margin: 5px 20px ;
  }
  
`;
export const Head = styled.div`
  grid-area: HEAD;
  padding-top:10px;
  padding-left:40px;
  background-color:var(--hover-light-shadow)
  
`;
export const Field = styled.div`
  grid-area: CONTENT;
  display:grid;
  grid-template-columns: auto auto auto auto auto;
`;
export const Items = styled.div`
  display:flex;  
  flex-direction:column;
  margin: 5px 20px ;
  label{
    margin-bottom: 0px;
  }
  .title{
    color:var(--azul-skytef);
    font-weight:bold;
  }
  .value{
    color:#444546
  }
`