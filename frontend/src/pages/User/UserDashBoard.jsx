import React from 'react'
import { Form, Button, Card, Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import styles from "../../styles/UserDashBoard.module.css"

export const UserDashBoard = () => {
  return (
    <>
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
              <Nav.Link href="/login">My Orders</Nav.Link>
              <Nav.Link href="/login">My Cart</Nav.Link>
              <Nav.Link href="/create-account">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
      </Container>
    </>
  )
}
