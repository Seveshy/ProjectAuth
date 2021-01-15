import styled from "styled-components";
import { LogoSkytefHubWhite } from "../../styles/Icons";
export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-area: Navbar;
  grid-template-areas: "Logo UserArea";
  opacity:0.7;
  background-image: linear-gradient(
    136deg,
    var(--azul-skytef) 0%,
    var(--verde-skytef) 100%
  );
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
