import React from "react";

import styles from "../../styles/forgetPassword.module.css";
import footer from "../../styles/Account/footer.module.css";
import { Form, Button, Card, Container, Navbar, Nav } from "react-bootstrap";

export const ResetPassword = () => {
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
          <h2 className={styles.loginHeader}>Reset Password</h2>
          <Form>
            <Form.Group controlId="username" className={styles.formGroup}>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                className={styles.formControl}
              />
            </Form.Group>

            <Form.Group controlId="password" className={styles.formGroup}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                className={styles.formControl}
              />
            </Form.Group>

            <Button type="submit" className={styles.loginButton}>
              Reset Password
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
  );
};
