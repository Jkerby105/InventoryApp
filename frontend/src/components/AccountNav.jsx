import React from "react";

import styles from "../styles/Account/adminNavbar.module.css";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

export const AccountNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/" className={styles.brand}>
          Jacksonville Community Giving Foundation
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={`justify-content-end ${styles.navLinks}`}
        >
          <Nav>
            <Button href="/" variant="primary" className={styles.navButton} style={{marginRight: "10px"}}>
              Login
            </Button>
            <Button href="/AboutUs" variant="outline-primary" className={styles.navButton}>
              About Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};