import { useState } from 'react'
import Modal from 'react-modal'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import { Content, FormTitleModal, WrapperAdd } from './styles'
import { GrClose, GrAddCircle } from 'react-icons/gr';

function ModalNumeroSerie({ isOpen, onRequestClose, onRequestSuccess }) {
    function handleChange(key, value) {
        
    }

    function handleAddInput(e) {
      
       
    }

    function handleSubmit(e) {
      
       
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <FormTitleModal>
                <h2>Alterar senha</h2>
                <GrClose onClick={onRequestClose} size={24} />
            </FormTitleModal>
            <Content>
                <form>
                    <input placeholder="Senha" />
                    <input placeholder="Nova senha" />
                    <input placeholder="Confirmar senha" />

                    <button onClick={handleSubmit} type="submit">
                        Salvar
                    </button>
                </form>
            </Content>
        </Modal>
    )
}

export default ModalNumeroSerie