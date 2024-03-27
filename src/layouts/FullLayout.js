import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
import Cards from "../views/ui/Cards";
import ComponentCard from "../components/ComponentCard";
import ProjectTables from "../components/dashboard/ProjectTable";
import Feeds from "../components/dashboard/Feeds";
import TopCards from "../components/dashboard/TopCards";
import Starter from "../views/Starter";

const FullLayout = () => {
  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/***----Sidebar----****/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar/>
        </aside>
        {/***----Content Area----***/}

        <div className="contentArea">
          {/***-----header----***/}
          <Header/>
          {/***-----Middle Content-----***/}
          <Container className="p-4 wrapper" fluid>
            {/* <TopCards/> */}
          {/* <ProjectTables/> */} 
           {/* <Outlet /> */}
            <Starter/> 
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
