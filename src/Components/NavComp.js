import React, { Component } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import ".//External.css";
import { Link } from "react-router-dom";
import logo from "../Shared/Images/woman-clothes.png";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './Routing.css'
import MenuIcon from "@mui/icons-material/Menu";

class NavComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarVisible: false
    };
  }

  render() {
    return (
      <div>
        <div>
          <div className="Header d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div className="sidebar-icon me-4" onClick={this.toggleMenu}>
                <MenuIcon />
              </div>
              <div className="d-flex align-items-center">
                <img
                  src={logo}
                  alt="Women Cloth"
                  width={40}
                  height={40}
                  style={{ float: "left" }}
                ></img>
                <h3 className="ms-2 mb-0">Women's Cloth</h3>
              </div>
            </div>
            <div>
              <ul className="mb-0 links">
                <Link to="HomeComp" className="btn btn1">
                  Home
                </Link>
                <Link to="MenuComp" className="btn btn1">
                  Menu
                </Link>
                <Link to="AboutComp" className="btn btn1">
                  About
                </Link>
                <Link to="ContactComp" className="btn btn1">
                  Contacts
                </Link>
                <li className="dropdown">
                  <Link
                    to="#"
                    className="btn btn1 dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    My Account
                  </Link>
                  <div
                    className="dropdown-menu btn1"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link to="LoginComp" className="dropdown-item">
                      Login
                    </Link>
                    <Link to="RegisterComp" className="dropdown-item">
                      Register
                    </Link>
                  </div>
                </li>
                <Link to="cart" className="btn btn1">
                  Cart
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  toggleMenu = () => {
    this.setState({ isSidebarVisible: !this.state.isSidebarVisible })
    this.props.toggleSidebar(this.state.isSidebarVisible);
  }

}

export default NavComp;
