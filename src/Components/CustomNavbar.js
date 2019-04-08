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
          <Link className="brandLook" to="/">
            Fun with us
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              style={{ marginLeft: "150px" }}
              className="brandLook"
              href="/"
            >
              Home
            </Nav.Link>

            <NavDropdown
              style={{ marginLeft: "30px" }}
              className="brandLook"
              title="Games"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="dropLook" href="/get100">
                Get 100 - 2 players game
              </NavDropdown.Item>
              <NavDropdown.Item className="dropLook" href="/get201">
                Get 201 - 4 players game
              </NavDropdown.Item>
              <NavDropdown.Item className="dropLook" href="/2dice">
                2 dice game for 2 players
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              style={{ marginLeft: "30px" }}
              className="brandLook"
              title="Quiz"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="dropLook" href="/autoQuiz">
                Auto quiz
              </NavDropdown.Item>
              <NavDropdown.Item className="dropLook" href="/footballQuiz">
                Football quiz
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              style={{ marginLeft: "30px" }}
              className="brandLook"
              href="/movies"
            >
              Movie
            </Nav.Link>
            <Nav.Link
              style={{ marginLeft: "30px" }}
              className="brandLook"
              href="/cars"
            >
              Cars
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
