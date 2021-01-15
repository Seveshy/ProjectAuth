import React from "react";
import {
  Container,
  Texture,
  Description,
  ProductDescription,
  ProductLogo,
  Banner,
  ContentForm,
  SkytefLogo,
} from "./styles";

import FormLogin from "../../components/FormLogin";

export default function Login() {
  return (
    <Container>
      <Banner>
        <Texture></Texture>
      </Banner>
      <ContentForm>
        <SkytefLogo />
        <FormLogin />
      </ContentForm>
      <Description>
        <label>© 2021 SKYTEF</label>
      </Description>
    </Container>
  );
}
