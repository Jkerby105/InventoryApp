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
              <Nav.Link href="/login">Inventory Data</Nav.Link>
              {/* <Nav.Link href="/create-account">Create Account</Nav.Link> */}
              <NavDropdown title="Products" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#home">Add Supplier</NavDropdown.Item>
                <NavDropdown.Item href="#home">
                  View All Products
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Register" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#home">
                  Register Supplier
                </NavDropdown.Item>
                <NavDropdown.Item href="#home">
                  Register Delivery
                </NavDropdown.Item>
                <NavDropdown.Item href="#home">Register Admin</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Order" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#home">
                  Assign Order Delivery
                </NavDropdown.Item>
                <NavDropdown.Item href="#home">
                  View All Orders
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Category" id="collapsible-nav-dropdown">
                <Nav.Link href="/create-account">Add Category</Nav.Link>
                <Nav.Link href="/create-account">View Categories</Nav.Link>
              </NavDropdown>

              <Nav.Link href="/create-account">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>Add Product</h2>
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
              Add Product
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
