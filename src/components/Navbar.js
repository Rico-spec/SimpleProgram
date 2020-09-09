import React, {useState} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'mdbreact/dist/css/mdb.css';
import { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import './Navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// function Navbar() {
//     return (
//         <>
//           <nav classname="navbar">
//             <div className="navbar-container">
//                 <Link to='/' className='navbar-logo'>
//                     <h2>Hello</h2>
//                 </Link>
//             </div>  
//           </nav>  
//         </>
//     )
// }



class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
        
      <MDBNavbar dark expand="md" className="nav ">
        <MDBNavbarBrand>
          <strong className="white-text"><MDBIcon icon="peace" className="iconstyle" /></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
            
              <MDBNavLink to="#!" className="navstyle"> <MDBIcon className="iconstyle" icon="th-large" /><strong>  CHANNELS</strong> </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!" className="navstyle"> <MDBIcon className="iconstyle" icon="bookmark" /> <strong> BOOKMARKS</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!" className="navstyle"> <MDBIcon className="iconstyle" icon="chart-pie" /> <strong> OVERVIEW</strong></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="#!" className="navstyle"> <MDBIcon className="iconstyle" icon="puzzle-piece" /> <strong> WIDGETS</strong></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right className="searchstyle">
          
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon icon="search" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                <MDBIcon icon="user-circle" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Profile</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Log Out</MDBDropdownItem>
                  
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;

// export default Navbar
