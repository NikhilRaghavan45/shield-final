import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import logo from '../Shared/Images/woman-clothes.png';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
import './Routing.css';

const SidebarComp = ({ isSidebarVisible, hideNav }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebar" className={`bg-white ${isSidebarVisible ? "force-visible" : ""}`}>
          <div className="position-sticky">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white">
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <Link to="SareeComp" className="nav-link" activeClassName="active" onClick={hideNav}>
                    Saree
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="LehengaComp" className="nav-link" activeClassName="active" onClick={hideNav}>
                    Lehenga
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="JeansComp" className="nav-link" activeClassName="active" onClick={hideNav}>
                    Jeans
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="TopsComp" className="nav-link" activeClassName="active" onClick={hideNav}>
                    Tops
                  </Link>
                </li>
                <li className="nav-item dropdown position-relative">
                  <a className="nav-link dropdown-toggle" href="#" id="productDetailsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ProductDetails
                  </a>
                  <ul className="dropdown-menu sidebar-dropdown position-absolute" aria-labelledby="productDetailsDropdown">
                    <li><Link to="/Saree" onClick={hideNav}>Saree</Link></li>
                    <li><Link to="/Lehenga" onClick={hideNav}>Lehenga</Link></li>
                    <li><Link to="/Jeans" onClick={hideNav}>Jeans</Link></li>
                    <li><Link to="/Tops" onClick={hideNav}>Tops</Link></li>
                    <li><Link to="/users" onClick={hideNav}>Users</Link></li>
                  </ul>
                  <Link to="/" className="nav-link position-absolute" style={{ top: '100%', left: 0 }}>
                    Logout
                  </Link>
                </li>
              </ul>
              {/* ... user dropdown and additional content ... */}
            </div>
          </div>
        </nav>
        <div class="main-container ms-sm-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default SidebarComp;
