import styled, { css } from "styled-components";
import { AiFillSetting } from "react-icons/ai";

export const Container = styled.div`
background-color:var(--gray-light-color);
display:flex;
flex-direction: column;

height: 100%;

      
    
`;
export const Content = styled.div`
     background-color:var(--white);
margin: 0px 20px;
     justify-self: center;
     
     
`;
export const Register = styled.div`
     background-color:white;
     padding:20px;
     margin:15px;
`;
export const WrapperData = styled.div`

    display: flex;
    padding: 20px;
    justify-content: space-between;
    input{
     cursor:pointer;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
`;
export const WrapperMenu = styled.div`
     display:flex;
     justify-content: space-evenly;

     ul {
      display: flex;
      
      align-items: center;
      width: 100%;
      margin:10px;
      height: 50px;
      place-content: space-evenly;
      list-style: none;
    }
    ul li {
       display: inline;
      cursor:pointer;
      width: 100%;
      text-align: center;
     
      height: 50px;
      place-content: space-evenly;
      }
    
      li{
        display:flex;
        background-color:var(--white);
        margin:10px;
        padding:15px;
        color:var(--gray);
        font-weight: bold;
    
      }
      li:hover{
        opacity:0.5;
        width: 100%;
        height: 50px;
        color:var(--white);
        background-image: linear-gradient( 
          136deg
          , var(--azul-skytef) 0%, var(--verde-skytef) 100% );
      }
      .ativo{
        opacity:0.6;
        width: 100%;
        height: 50px;
        color:var(--white);
        background-image: linear-gradient( 
          136deg
          , var(--azul-skytef) 0%, var(--verde-skytef) 100% );
      }
     
`;
export const WrapperMenuItem = styled.div`
     background-color:var(--gray)
     
`;


export const Title = styled.div`
     
     
`;
export const Header = styled.div`
display:flex;
margin:20px;
h1{
  margin-left:5px;
  color:var(--gray-font-color)
}
     
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
export const CompanyIcon = styled(AiFillSetting)`
width: 40px;
height: 40px;
color:var(--gray-font-color)
`;


export const Wrapper = styled.div`
margin-top:20px;

  display: grid;
   grid-template-columns:250px  auto;

   grid-template-areas:
   
    'SM CONTENT';
     height: 100%;
`;





export const HeaderDetail = styled.div`
 
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
  grid-area: SM;
  display:flex;
  text-align:left;
  height:100%;
  background-image: linear-gradient(
    136deg,
    var(--azul-skytef) 0%,
    var(--verde-skytef) 100%
  );

.ativo{
  cursor:pointer;
  color: var(--white);
  text-decoration:none;
  font-size:16px;
  font-weight:lighter;
  width:250px;
  padding:20px;
  font-weight:bold;
  background-color: var(--mascara);
}

  .links{
   cursor:pointer;
    color: var(--white);
    text-decoration:none;
    font-size:16px;
    font-weight:lighter;
    width:250px;
    padding:20px;
    /* text-align:center;
    align-self:center;
    justify-self:center; */
    
  }
  li:hover{
    cursor:pointer;

    font-weight:bold;
    background-color: var(--mascara);
  }
  .links:hover{
    font-size:16px;
    cursor:pointer;

   
  }

`;
export const Line = styled.div`
  width:auto;
  height:0.1px;
  background-color:var(--mascara);
`;
export const ContentWrapper = styled.div`
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