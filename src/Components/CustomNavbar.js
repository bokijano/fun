import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./../App.css";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand>
          <Link className="brandLook" to="/home">
            Fun with us
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{ marginLeft: "100px" }} href="/home">
              <Link className="brandLook" to="/home">
                Home
              </Link>
            </Nav.Link>
            <NavDropdown
              style={{ marginLeft: "30px" }}
              className="brandLook"
              title="Games"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/get100">
                <Link className="dropLook" to="/get100">
                  Get 100 - 2 players game
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/get201">
                <Link className="dropLook" to="/get201">
                  Get 201 - 4 players game
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/2dice">
                <Link className="dropLook" to="/2dice">
                  2 dice game for 2 players
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              style={{ marginLeft: "30px" }}
              className="brandLook"
              title="Quiz"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="/autoQuiz">
                <Link className="dropLook" to="/autoQuiz">
                  Auto quiz
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="/footballQuiz">
                <Link className="dropLook" to="/autoQuiz">
                  Football quiz
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link style={{ marginLeft: "30px" }} href="movies">
              <Link className="brandLook" to="/movies">
                Movies
              </Link>
            </Nav.Link>
            <Nav.Link style={{ marginLeft: "30px" }} href="/cars">
              <Link className="brandLook" to="/cars">
                Cars
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
