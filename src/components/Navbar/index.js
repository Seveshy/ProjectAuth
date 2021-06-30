import React, {useState} from "react";
import {
  Container,
  Logo,
  UserArea,
  LogoWrapper,
  UserAreaWrapper,
  Menu
} from "./styles";
import { FaUserCircle } from "react-icons/fa";
import { ModalMenu } from './Modal/ModalMenu';

import Modal from 'react-modal';
import "./modal.css";
import MenuItems from "../../services/menuItems"
import { Link } from "react-router-dom";

export default function Navbar() {
  const [content, setContent] = useState(0);


  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <FaUserCircle onClick={openModal} color={'var(--white)'} size={30} />
    </Container>
   <Menu>
          <ul>
              {MenuItems.map((item, index) => {
                return (
                  <li to={item.url}>
                  <Link
                    key={index}
                    onClick={() => setContent(index)}>
                    {item.name}
                  </Link>
                  </li>
                );
              })}
            </ul>
   </Menu>
   <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="sgs-modal-navbar"
        overlayClassName="sgs-overlay"
      >
        <ModalMenu />
      </Modal>
    </>
  );
}
