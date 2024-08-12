import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';

function FolderCreateCard() {
    //
    const [show , setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<>
<Card  style={{ width:"80%",height:"65%" ,backgroundColor:"#fff"}}>
<Button style={{position:"relative",width:"100%",height:"100%"}} variant="primary" onClick={handleShow}>
       Create Folder
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Folder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Folder Name" />
      </Form.Group>
     
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Create
          </Button>
        </Modal.Footer>
      </Modal>
</Card>

 
</> 
 )
}

export default FolderCreateCard