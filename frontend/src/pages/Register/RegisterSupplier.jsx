import React from "react";

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

export const RegisterSupplier = () => {
  return (
    <>
      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>Add Supplier</h2>
          <Form>
            <Row>
              <Col>
                <Form.Group
                  controlId="companyName"
                  className={styles.formGroup}
                >
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter companies name"
                    className={styles.formControl}
                  />
                </Form.Group>
                <Form.Group controlId="email" className={styles.formGroup}>
                  <Form.Label>Company Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter companies email"
                    className={styles.formControl}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="address" className={styles.formGroup}>
                  <Form.Label>Company Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter companies address"
                    className={styles.formControl}
                  />
                </Form.Group>
                <Form.Group
                  controlId="phoneNumber"
                  className={styles.formGroup}
                >
                  <Form.Label>Company Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter companies phone"
                    className={styles.formControl}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit" className={styles.loginButton}>
              Add Supplier
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
