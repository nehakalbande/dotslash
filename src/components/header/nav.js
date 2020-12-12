import React, { useState, setstate } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  Tooltip,
} from "reactstrap";

import logo from "./1.png";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggletooltip = () => setTooltipOpen(!tooltipOpen);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" className="dotslash">
        <NavbarBrand href="/" className="dotslash1">
          <img src={logo} width="30px"></img>./ Comunnity
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="main-nav" href="/contest/">
                Contest
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="main-nav" href="/getstarted" id="getsta">
                Get Started
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="main-nav" href="/team" id="teamm">
                Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="disabled" href="/forum/" onH>
                Discussion
              </NavLink>
            </NavItem>
            <NavItem>
              <Button color="dark" dark style={{ border: "2px solid grey" }}>
                Login
              </Button>
            </NavItem>
            {/* <NavbarText>Simple Text</NavbarText> */}
            {/* <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
        <Nav></Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
