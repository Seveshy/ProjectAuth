import styled,{css} from "styled-components";
import { LogoSkytefHubWhite } from "../../styles/Icons";
import { BiExit,
  BiKey } from "react-icons/bi";



  const iconCSS = css`
  width: 25px;
  height: 25px;  
  margin-right:10px;
`;
export const IconExit = styled(BiExit)`
  ${iconCSS}
`;
export const IconKey = styled(BiKey)`
  ${iconCSS}
`;
export const Container = styled.div`
padding: 15px;
height: 70px;
display: flex;
place-content: space-between;
background-image: linear-gradient( 
136deg
, var(--azul-skytef) 0%, var(--verde-skytef) 100% );
`;
export const Menu = styled.div`
display: flex;


background-color: var(--white) ;
box-shadow: 2px 0.5px var(--hover-light-shadow);

ul {
  display: flex;
  
  align-items: center;
  width: 100%;
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

  a {
    padding: 12px 45%;
  }
}

  li{
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
`;


export const LogoWrapper = styled.div`
  display: flex;
  grid-area: Logo;
`;

export const Logo = styled(LogoSkytefHubWhite)`
  width: 200px;
  height: 30px;
  align-self: center;
  margin-left: 5%;
`;
export const UserAreaWrapper = styled.div`
  display: flex;
  grid-area: UserArea;
  justify-content: flex-end;
`;
export const UserArea = styled.div`
  height: 35px;
  width: 35px;
  align-self: center;
  margin-right:5%;
  border-radius: 50%;
  background-color: white;
  text-align: center;
  font-weight:bold;
  padding-top:8px;
  color: var(--verde-skytef);
`;
export const ContainerModal = styled.div`
  display: flex;
  border-color:var(--border);
  box-shadow: 0 2px 10px rgba(0,0,0,.2);
  border-width: 0.02px;
  border-style: solid;
  flex-direction: column;
  width: 300px;
  position: absolute;
  transition: all 0.5s ease;
  background: var(--white);
  border-radius: 4px;
  right: 0;
  margin-right: 30px;
  opacity: 1;
  z-index: 1;
  padding: 10px;
 
  color: #757575;

  > img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  > span {
    margin-top: 18px;
    font-size: 16px;
    font-weight: bold;
    color: #202124;
  }

  p {
    font-size: 14px;
    margin-top: 6px;
  }

  div {
    height: 1px;
    background-color: #ccc;
    width: 100%;
  }

  .modalItem {
    display: flex;
    place-items: center;
    transition: 0.2s;
    
    &:hover {
      opacity: 0.5;
    }
  }

  a {
    background-color: var(--white);
    
    font: 500 14px/16px Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
   
   letter-spacing: .15px;
    margin: 9px;
    outline: 0;
    padding: 10px 24px;
    text-decoration: none;

    color: #757575;
  }

`
