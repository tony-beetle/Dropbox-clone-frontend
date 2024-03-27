import { Col, Row } from "reactstrap";
import { useState } from "react";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import React from "react";
import { useRef } from "react";
import { Upload } from "@mui/icons-material";
import UploadCard from "../components/home/UploadCard";
import FolderCreateCard from "../components/home/FolderCreateCard";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Starter = () => {
  // dropdown
  
  return (
    <div>
      {/***Top Cards***/}
      <Row>
        {/* card-1 */}
        <Col style={{position:""}} sm="6" lg="3">
        <UploadCard/> 
        </Col>
     {/* card-2 */}
        <Col sm="6" lg="3">
          <FolderCreateCard/>
        </Col>
     {/* card-3 */}
  
        <Col style={{ zIndex: 1 }} sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-success"
            title=""
            subtitle="Access"
            earning="People"
            icon="bi bi-folder-plus"
          />
        </Col>
      </Row>
      {/***Sales & Feed***/}
      {/* <Row>
        <Col sm="6" lg="6" xl="7" xxl="8"></Col>
        <Col sm="6" lg="6" xl="5" xxl="4"></Col>
      </Row> */}
      {/***Table ***/}
      <Row>
        <Col lg="12" sm="6">
          <ProjectTables />
        </Col>
      </Row>
      {/***Blog Cards***/}
      {/* <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row> */}
    </div>
  );
};

export default Starter;
