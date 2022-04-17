import * as React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'react-bootstrap';
import { useModal } from '../../hooks/useModal'

export interface ShareProps {
  isShow: boolean;
  n: () => void;
}
export const Share: React.FC<ShareProps> = ({ isShow, hide }) => {
  function onClose (){
    isShow=false
    return isShow
  }
  console.log(isShow)

  const modal = (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose} >Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  )
  return isShow ? ReactDOM.createPortal(modal, document.body) : null;
}