import React from 'react'

import styles from "../../styles/registerSupplier.module.css";
import {
  Form,
  Button,
  Card,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Col,
  Row,
} from "react-bootstrap";

export const Register = () => {
  return (
    <>
      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>Register</h2>
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
    </>
  )
}
