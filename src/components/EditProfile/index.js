import { useRef, useState } from "react";

import Input from "../Input";
import Button from "../Button";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Form } from "@unform/web";

import { FiLock } from "react-icons/fi";
import api from "../../services/api";

import * as Yup from "yup";

import {
  Container,
  WrapperContent,
  Figure,
  Title,
  Label,
  WrapperButton,
  FormGroup,
} from "./styles";
import  CircularProgress  from "../CircularProgress";

function EditProfile() {
  const formRef = useRef(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, isLoading] = useState(false);

 

  async function handleSubmit(data) {
    isLoading(true);

    try {
      const schemaSignup = Yup.object().shape({
        currentPassword: Yup.string()
          .min(6, "No mínimo 6 caracteres")
          .required("Preencha os campos"),
        newPassword: Yup.string()
          .min(6, "No mínimo 6 caracteres")
          .required("Preencha os campos"),
        confirmPassword: Yup.string()
          .min(6, "No mínimo 6 caracteres")
          .required("Preencha os campos"),
      });

      await schemaSignup.validate(data, {
        abortEarly: false,
      });

      if (newPassword !== confirmPassword) {
        return;
      }

      api.post("autenticador/alterar_senha", {
        senhaAtual: currentPassword,
        senhaNova: newPassword,
      });

      toast.success("Ação realizada com sucesso");
      isLoading(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        toast.error("Algo de errado aconteceu");

        formRef.current.setErrors(errorMessages);
      }
      isLoading(false);
    }
  }

  return (
    <Container>
      <Title>
        <h1>Editar perfil</h1>
      </Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <WrapperContent>
          <Label>Senha atual</Label>
          <Input
            name="currentPassword"
            type="password"
            icon={FiLock}
            value={currentPassword}
            onChange={(event) => setCurrentPassword(event.target.value)}
          />
          <Label>Nova senha</Label>
          <Input
            name="newPassword"
            type="password"
            icon={FiLock}
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
          />
          <Label>Confirmar senha</Label>
          <Input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            icon={FiLock}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </WrapperContent>
        <WrapperButton>
          <div>
            {loading ? (
              <CircularProgress />
            ) : (
              <Button onClick={handleSubmit} type="submit" name="Aplicar" />
            )}
          </div>
        </WrapperButton>
      </Form>
    </Container>
  );
}

export default EditProfile;
