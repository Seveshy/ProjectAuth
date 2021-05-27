import { Container, Content, Backrgound, Text } from "./styles";

import { useRef, useState, useEffect } from "react";
import * as Yup from "yup";

import { Form } from "@unform/web";
import { FiUser, FiLock } from "react-icons/fi";


import Input from "../Input";
import CircularProgress from "../CircularProgress";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import {

  setToken,

} from "../../services/auth";

import { useSelector, useDispatch } from "react-redux";


function SignIn() {
  const formRef = useRef(null);
  let history = useHistory();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data, { reset }) {
    try {
      const schemaSignup = Yup.object().shape({
        login: Yup.string().required("O usuario é obrigatório"),
        password: Yup.string().min(6, "No mínimo 6 caracteres"),
      });

      await schemaSignup.validate(data, {
        abortEarly: false,
      });

      doLogin(data.login, data.password);
      formRef.current.setErrors({});
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  async function doLogin(login, senha) {
    setLoading(true);
    try {
      const response = await api.post("login", {
        login: login,
        senha: senha,
      });
      console.log("RESPONSE " + response);
      setTimeout(function () {
        setToken(response.headers.authorization);
        history.push("/config");
        setLoading(false);
      }, 2000);

    } catch (response) {
      setErrorMessage("Login ou  senha incorretos");
      setLoading(false);
    }
  }


  return (
    <Container>

      <label>Entre para continuar</label>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="login" icon={FiUser} placeholder="Login" />
        <Input
          name="password"
          type="password"
          icon={FiLock}
          placeholder="Senha"
        />
        {errorMessage ? <p>{errorMessage}</p> : null}
        {!loading ? (
          <Button
            type="submit"
            name="Entrar"
            style={{ background: "#003f76" }}
          />
        ) : (
          <CircularProgress />
        )}
      </Form>


    </Container>
  );
}

export default SignIn;
