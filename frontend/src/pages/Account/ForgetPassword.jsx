import React from 'react'
import styles from "../../styles/forgetPassword.module.css"
import footer from "../../styles/Account/footer.module.css";
import { Form, Button, Card, Container, Navbar, Nav } from "react-bootstrap";

export const ForgetPassword = () => {
  return (
    <>
      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>Forgot Password</h2>
          <Form>
            <Form.Group controlId="email" className={styles.formGroup}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className={styles.formControl}
              />
            </Form.Group>
            <Button type="submit" className={styles.loginButton}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}
