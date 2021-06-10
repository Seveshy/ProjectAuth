import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../services/auth";
import { GrClose } from 'react-icons/gr';
import Modal  from "react-modal";

import ModalForgotPassword from '../ModalForgotPassword';

import { ContainerModal , IconExit, IconKey, RecuperarSenha } from "../styles";

import EditProfile from "../../EditProfile"

export function ModalMenu() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal(){
    setIsOpen(false);
  }

  function openModal(){
    setIsOpen(true);
  } 

  return (
    <>
      <ContainerModal>
        <Link className="modalItem"  onClick={openModal}>
          {" "}
          <IconExit />
          Alterar Senha
        </Link>
        <ModalForgotPassword 
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        />
        <div />
        <Link className="modalItem" to="login" onClick={logout}>
          <IconKey />
          Logout
        </Link>
      </ContainerModal>
     
    </>
  );
}
