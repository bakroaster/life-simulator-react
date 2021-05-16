import React from "react";
import Sidenav from "./Sidenav";
import {
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch,
} from "@blueprintjs/core";

function Header() {
  return (
    <>
      <Navbar id="navbar" className="bp3-dark">
        <NavbarGroup className="navgroup" align={Alignment.LEFT}>
          <Sidenav />
          <NavbarHeading>Life-Simulator</NavbarHeading>
          <NavbarDivider />
        </NavbarGroup>
        <NavbarGroup className="navgroup" align={Alignment.RIGHT}>
          <div className="bal">$550k</div>
          <div className="p"></div>
        </NavbarGroup>
      </Navbar>
    </>
  );
}

export default Header;
