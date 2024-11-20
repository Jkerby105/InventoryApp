import React from 'react'

import styles from "../../styles/createAccount.module.css";
import footer from "../../styles/Account/footer.module.css";
import { Form, Button, Card, Container, Navbar, Nav } from "react-bootstrap";

export const CreateAccount = () => {
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
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/create-account">Create Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>Create Account</h2>
          <Form>
            <Form.Group controlId="firstName" className={styles.formGroup}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                className={styles.formControl}
              />
            </Form.Group>

            <Form.Group controlId="lastName" className={styles.formGroup}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                className={styles.formControl}
              />
            </Form.Group>

            <Form.Group controlId="phoneNumber" className={styles.formGroup}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                className={styles.formControl}
              />
            </Form.Group>

            <Form.Group controlId="address" className={styles.formGroup}>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                className={styles.formControl}
              />
            </Form.Group>

            <Form.Group controlId="email" className={styles.formGroup}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className={styles.formControl}
              />
            </Form.Group>

            <Form.Group controlId="password" className={styles.formGroup}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                className={styles.formControl}
              />
            </Form.Group>

            <Form.Group controlId="role" className={styles.formGroup}>
              <Form.Label>Role</Form.Label>
              <Form.Control as="select" className={styles.formControl}>
                <option>Admin</option>
                <option>Supplier</option>
              </Form.Control>
            </Form.Group>

            <Button type="submit" className={styles.loginButton}>
              Create Account
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <footer className={footer.footer}>
        <Container className="text-center">
          <p className={footer.footerText}>
            © 2024 Inventory Management System. All rights reserved.
          </p>
          <Nav className="justify-content-center">
            <Nav.Link href="/terms" className={footer.footerLink}>
              Terms of Service
            </Nav.Link>
            <Nav.Link href="/privacy" className={footer.footerLink}>
              Privacy Policy
            </Nav.Link>
          </Nav>
        </Container>
      </footer>
    
    </>
  )
}
