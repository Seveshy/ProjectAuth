import React from "react";
import {
  Container,
  Logo,
  UserArea,
  LogoWrapper,
  UserAreaWrapper,
} from "./styles";

export default function Navbar() {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <UserAreaWrapper>
        <UserArea>VF</UserArea>
      </UserAreaWrapper>
    </Container>
  );
}
