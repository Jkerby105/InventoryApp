import React from "react";

import styles from "../styles/Login.module.css";
import { Form, Button, Card, Container, Navbar, Nav } from "react-bootstrap";

export const AccountNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className={styles.navBar}>
          Inventory Management System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link href="#deets">Create Account</Nav.Link>
            <Nav.Link href="#memes">About Us</Nav.Link>
            <Nav.Link href="#memes">Login</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
