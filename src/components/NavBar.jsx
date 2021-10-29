import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavBar() {
  // const logout = () => {
  //   console.log("Trying");
  // };
  return (
    // <nav>
    //   <div className="nav-wrapper blue">
    //     <Link to="/" className="brand-logo">
    //       Superman Shuvo
    //     </Link>
    //     <ul id="nav-mobile" className="right hide-on-med-and-down">
    //       <li>
    //         <Link to="/">Todo</Link>
    //       </li>
    //       <li>
    //         <Link to="/login">Log In</Link>
    //       </li>
    //       <li>
    //         <Link to="/signup">Sign Up</Link>
    //       </li>
    //       <li>
    //         <Link to="/" onClick={logout()}>
    //           Log Out
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <Navbar bg="primary" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Superman Shuvo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Todo
            </Link>
            <Link
              to="/login"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Sign Up
            </Link>
            <Link
              to="/logout"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Log Out
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
