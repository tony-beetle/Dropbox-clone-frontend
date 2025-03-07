import React from "react";
import { Link } from "react-router-dom";
import Input from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search'
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";

import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
import user1 from "../assets/images/users/user1.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { TextField } from "@mui/material";
import { FormControl } from "react-bootstrap";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  return (
    <>
      <Navbar color="primary" className="" dark expand="md">
        <div className="d-flex ">
          {/* mobile view logo */}
          <NavbarBrand href="" className="d-lg-none">
            <LogoWhite />
          </NavbarBrand>
          {/*sidebar Icon button in mobile view*/}
          <Button
            size="lg"
            color="primary"
            className="d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-list"></i>
          </Button>
        </div>
        {/*menu display 3 dots button in mobile view*/}
        <div className="hstack gap-2">
          <Button
            color="primary"
            size="md"
            className="d-sm-block d-md-none"
            onClick={Handletoggle}>
            {isOpen ? (
              <i className="bi bi-x"></i>
            ) : (
              <i className="bi bi-three-dots-vertical"></i>
            )}
          </Button>
        </div>
                {/* search field in mobile view & laptop */}
       
               

        <input  style={{width:"400px"}}
                class="form-control "
                type="text"
               
                placeholder="  Search file here"
              />

        <Collapse navbar isOpen={isOpen} className="">
          <Nav
            className="d-flex align-items-center ms-auto "
            navbar
          >
            <NavItem className="ms-auto">
             
            </NavItem>
            <div className="d-flex">
              <NavItem>
                <Link to="/starter" className="nav-link">
                  <NotificationsIcon />
                </Link>
              </NavItem>
              {/* <NavItem>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </NavItem> */}

              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle color="primary">
                  <img
                    src={user1}
                    alt="profile"
                    className="rounded-circle"
                    width="30"
                  ></img>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Info</DropdownItem>
                  <DropdownItem>My Account</DropdownItem>
                  <DropdownItem>Edit Profile</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>My Balance</DropdownItem>
                  <DropdownItem>Inbox</DropdownItem>
                  <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
