import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button} from 'react-bootstrap';
import { useModal } from '../../hooks/useModal'

export interface ShareProps {
  show: boolean;
}
export const Share: React.FC<ShareProps> = ({ show }) => {

  const { isShow, setIsShow } = useModal();

  const modalRef = useRef()

  const close = (e: any) => {
    if (modalRef.current === e.target){
      setIsShow(false);
    }
  }

  const modal = (
    <div ref={modalRef}>
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={close}>Close</Button>
        <input type='text'></input>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
    </div>
  )
  return show ? ReactDOM.createPortal(modal, document.body) : null;
}