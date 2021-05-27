import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../services/auth";
import { GrClose } from 'react-icons/gr';
import Modal  from "react-modal";

import { ContainerModal , IconExit, IconKey, RecuperarSenha } from "../styles";

import EditProfile from "../../EditProfile"

export function ModalMenu() {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <ContainerModal>
        <Link className="modalItem"  onClick={() => setIsOpen(true)}>
          {" "}
          <IconExit />
          Alterar Senha
        </Link>
        <div />
        <Link className="modalItem" to="login" onClick={logout}>
          <IconKey />
          Logout
        </Link>
      </ContainerModal>
      <Modal
        isOpen={modalIsOpen}
        // onRequestClose={()=> setIsOpen(false)}
        ariaHideApp={false}
        className="sgs-modal-recuperacao-senha"
        overlayClassName="Overlay"
      >
          <GrClose className="sgs-svg-recupera-senha-close" onClick={()=>setIsOpen(false)} size={24} />
          <EditProfile />

      </Modal>
    </>
  );
}
