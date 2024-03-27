import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import Dropdown from "react-bootstrap/Dropdown";
import "./styles.css";
import { Hidden } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function UploadCard() {
  //
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    setFile(e.target.files[0]); // Assuming single file upload
    if (file) {
      const formData = new FormData();
      formData.append('myFile', file);
      console.log(formData);
      try {
        const response = await axios.post("http://localhost:5000/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
       console.log(response);
        
      } catch (err) {
        console.log(err);
      }
    }
  };
  // const [file, setFile] = useState("");

  // const handleUpload = async (e) => {
  //   e.preventDefault();
  //   console.log(file[0]);
  //   setFile(e.target.files);
  //   try {
  //     axios
  //       .post("http://localhost:5000/upload", file, {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <Card
        style={{
          width: "100%",
          height: "80%",
          backgroundColor: "#EEF5F9",
          boxShadow: "none",
        }}
      >
        <CardBody style={{}}>
          <Dropdown
            className="custom-dropdown-toggle"
            style={{ height: "80px", width: "100%" }}
          >
            <Dropdown.Toggle
              className="custom-dropdown-toggle "
              style={{
                height: "100%",
                width: "100%",
                boxShadow: "none",
              }}
              id="dropdown-basic"
            >
              Upload File
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ width: "150px" }}>
              <Dropdown.Item href="#/action-1">
                <label for="files" class="btn">
                  Select File
                </label>
                <input
                  onChange={handleUpload}
                  name="myFile"
                  id="files"
                  style={{ visibility: "hidden" }}
                  type="file"
                />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </CardBody>
      </Card>
    </>
  );
}

export default UploadCard;
