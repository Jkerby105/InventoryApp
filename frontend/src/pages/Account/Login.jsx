import React from "react";

import styles from "../../styles/login.module.css";
import { Form, Button, Card, Container, Navbar, Nav } from "react-bootstrap";

export const Login = () => {
  return (
    <>
      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>Login</h2>
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
                placeholder="Enter password"
                className={styles.formControl}
              />
            </Form.Group>

            <Button type="submit" className={styles.loginButton}>
              Login
            </Button>
          </Form>
          <a href="/forgot-password" className={styles.additionalLink}>
            Forgot Password?
          </a>
          <a href="/create-account" className={styles.additionalLink}>
            Create an Account
          </a>
        </Card.Body>
      </Card>
    </>
  );
};
