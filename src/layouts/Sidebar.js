import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";

const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Files",
    href: "/",
    icon: "bi bi-images",
  },
  {
    title: "Shared",
    href: "/",
    icon: "bi bi-people",
  },
  {
    title: "Starred",
    href: "/",
    icon: "bi bi-bookmark-star",
  },
  {
    title: "Trash",
    href: "/",
    icon: "bi bi-trash3",
  },

  // {
  //   title: "Alert",
  //   href: "/alerts",
  //   icon: "bi bi-bell",
  // },
  // {
  //   title: "Badges",
  //   href: "/badges",
  //   icon: "bi bi-patch-check",
  // },
  // {
  //   title: "Buttons",
  //   href: "/buttons",
  //   icon: "bi bi-hdd-stack",
  // },
  // {
  //   title: "Cards",
  //   href: "/cards",
  //   icon: "bi bi-card-text",
  // },
  // {
  //   title: "Grid",
  //   href: "/grid",
  //   icon: "bi bi-columns",
  // },
  // {
  //   title: "Table",
  //   href: "/table",
  //   icon: "bi bi-layout-split",
  // },
  // {
  //   title: "Forms",
  //   href: "/forms",
  //   icon: "bi bi-textarea-resize",
  // },
  // {
  //   title: "Breadcrumbs",
  //   href: "/breadcrumbs",
  //   icon: "bi bi-link",
  // },
  // {
  //   title: "About",
  //   href: "/about",
  //   icon: "bi bi-people",
  // },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <span className="ms-auto d-lg-none">
          <Button
            close
            size="sm"
            className="ms-auto d-lg-none"
            onClick={() => showMobilemenu()}
          ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <div className=" d-flex justify-content-center">
            <Button
              style={{ width: "200px" }}
              size="md"
              color="danger"
              tag="a"
              target="_blank"
              className="mt-3"
              href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
            >
              Get More Storage
            </Button>
          </div>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
