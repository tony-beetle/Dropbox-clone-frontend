import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { folderCreationApi } from "../Services/Allapi";
import axiosInstance from "../Services/axiosInstance";

function FolderCreateCard() {
  //
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [folderName, setFolderName] = useState("ggt");

  const handleCreateFolder = async () => {
    try {
      const response = await axiosInstance("createfolder" ,folderName);
      console.log(response);
     // handleClose(true)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Card style={{ width: "80%", height: "65%", backgroundColor: "#fff" }}>
        <Button
          style={{ position: "relative", width: "100%", height: "100%" }}
          variant="primary"
          onClick={handleShow}
        >
          Create Folder
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Folder</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Folder Name</Form.Label>
                <Form.Control
                  onChange={(e) => setFolderName(e.target.value)}
                  type="text"
                  placeholder="Folder Name"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              onClick={handleCreateFolder}
              variant="primary"
             
            >
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </>
  );
}

export default FolderCreateCard;
