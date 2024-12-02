import React from "react";

import styles from "../../styles/forgetPassword.module.css";
import footer from "../../styles/Account/footer.module.css";
import { Form, Button, Card, Container, Navbar, Nav } from "react-bootstrap";

export const ResetPassword = () => {
  return (
    <>
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

    </>
  );
};
