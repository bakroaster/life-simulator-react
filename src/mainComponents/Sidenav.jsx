import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Classes,
  Divider,
  Drawer,
  DrawerSize,
  Position,
} from "@blueprintjs/core";

class Sidenav extends React.Component {
  state = {
    autoFocus: true,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    hasBackdrop: true,
    isOpen: false,
    position: Position.LEFT,
    size: DrawerSize.LARGE,
    usePortal: true,
  };
  handleOpen = () => this.setState({ isOpen: true });
  handleClose = () => this.setState({ isOpen: false });

  render() {
    return (
      <>
        <Button
          minimal="true"
          icon="menu"
          onClick={this.handleOpen}
          className="opennavbtn"
        ></Button>
        <Drawer
          className=" bp3-dark drawer"
          Position={Position.LEFT}
          onClose={this.handleClose}
          title="Menu"
          {...this.state}
        >
          <div className={Classes.DRAWER_BODY}>
            <div className={Classes.DIALOG_BODY}>
              <div className="profile">
                <img src="" alt="" className="profile_picture" />
                <div>Naresh</div>
                <div>Totel Cash: $50k</div>
              </div>
              <Divider />
              <ul className="menu">
                <li>
                  <NavLink className="menuitems" activeClassName="active" onClick={this.handleClose} to="/Home">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menuitems" activeClassName="active" onClick={this.handleClose} to="/Employment">
                    Employment
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menuitems" activeClassName="active" onClick={this.handleClose} to="/Education">
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menuitems" activeClassName="active" onClick={this.handleClose} to="/Business">
                    Business
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menuitems" activeClassName="active" onClick={this.handleClose} to="/Finance">
                    Finance
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menuitems" activeClassName="active" onClick={this.handleClose} to="/Socialising">
                    Socialising
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menuitems" activeClassName="active" onClick={this.handleClose} to="/Relationship">
                    Relationship
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menuitems" activeClassName="active" onClick={this.handleClose} to="/Properties">
                    Properties
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menuitems" activeClassName="active" onClick={this.handleClose} to="/Shopping">
                    Shopping
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menuitems" activeClassName="active" onClick={this.handleClose} to="/Health">
                    Health
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menuitems" activeClassName="active" onClick={this.handleClose} to="/About">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menuitems" activeClassName="active" onClick={this.handleClose} to="/Help">
                    Help
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className={Classes.DRAWER_FOOTER}></div>
        </Drawer>
      </>
    );
  }
}

export default Sidenav;
