import React, { useState } from "react";
import { Container, ButtonSingIn, InputText, ForgetPwd } from "./styles";
import api from "../../services/api";
import {login} from'../../services/auth'
import { useHistory } from "react-router-dom";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  let history = useHistory();
  return (
    <Container>
      <label>Entre para continuar: </label>
      <InputText
        type="text"
        placeholder="Digitar e-mail"
        onChange={e => setEmail(e.target.value)}
      />
      <InputText
        type="password"
        placeholder="Digitar senha"
        onChange={e => setSenha(e.target.value)}
      />
      <ButtonSingIn onClick={() => doLogin()}>
        <label> Entrar</label>
      </ButtonSingIn>

      <ForgetPwd>Não consegue entrar?</ForgetPwd>
    </Container>
  );

  async function doLogin() {
    try {
      const response = await api.post("rest/usuario/autenticar", {
        email: email,
        senha: senha,
      });
      login(response.retorno)
      history.push("/config");
    } catch (response) {
      throw new Error("Usuario ou senha incorreto " );
    }
  }
}
