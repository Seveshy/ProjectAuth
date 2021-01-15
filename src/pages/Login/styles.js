import styled, { css } from "styled-components";

import { TextureLogin, LogoIcon } from "../../styles/Icons";

export const Container = styled.div`
  background-color: var(--background);
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: auto 50px;
  grid-template-areas:
    "Banner FormLogin"
    "Description Description";
  height: 100vh;
`;

export const Texture = styled(TextureLogin)`
  height: 80vh;
`;
export const Banner = styled.div`
  grid-area: Banner;
  background-image: url(${Texture});
`;

export const ProductLogo = styled.div``;
export const ProductDescription = styled.div``;
export const ContentForm = styled.div`
  grid-area: FormLogin;
  display: grid;
  grid-template-rows: 5% 95%;
  grid-template-areas:
    "Logo"
    "ContentForm";

`;
export const SkytefLogo = styled(LogoIcon)`
  width: 200px;
  grid-area: Logo;
  display: flex;
  justify-self: flex-end;
`;
export const Description = styled.div`
  grid-area: Description;
  text-align: center;

  font-family: roboto, "Helvetica Neue", Ubuntu, Arial, sans-serif;
  font-size: 12px;
  > label {
    color: var(--azul-skytef);
  }
`;
