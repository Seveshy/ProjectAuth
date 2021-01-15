import React from "react";
import logoSkytef from "../../assets/skytef_logo.png";
import logoSkytefHubColor from "../../assets/logo_skytefhub_colorido.png";
import logoSkytefHubWhite from "../../assets/logo_skytefhub_branco.png";
import textureLogin from "../../assets/textura_login_skytefhub.png";



export const SkytefIcon = (props) => {
  return <img src={logoSkytef}  {...props} />;
};

export const LogoSkytefHubColor = (props) => {
  return <img src={logoSkytefHubColor}  {...props} />;
};
export const LogoSkytefHubWhite = (props) => {
  return <img src={logoSkytefHubWhite}  {...props} />;
};
export const TextureLogin = (props) => {
  return <img src={textureLogin}  {...props} />;
};
