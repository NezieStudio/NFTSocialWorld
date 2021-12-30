import React, { Component } from "react";
import {
  Navbar as NavBar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import Identicon from "identicon.js";

class Navbar extends Component {
  render() {
    return (
      <div>
        <NavBar color="dark" expand="md" dark>
          <NavbarBrand href="/">CrpytoSocialWorld</NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Timeline</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Profile</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Wallet</NavbarText>
        </NavBar>
      </div>
    );
  }
}

export default Navbar;
