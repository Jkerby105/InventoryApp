import React from "react";

import styles from "../../styles/Admin/addProduct.module.css";
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

export const AddProduct = () => {
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
                <NavDropdown.Item href="#home">Add Product</NavDropdown.Item>
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
                  controlId="productName"
                  className={styles.formGroup}
                >
                  <Form.Label>Product Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    className={styles.formControl}
                  />
                </Form.Group>
                <Form.Group controlId="category" className={styles.formGroup}>
                  <Form.Label>Select Category</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="supplier" className={styles.formGroup}>
                  <Form.Label>Select Supplier</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group
                  controlId="purchasePrise"
                  className={styles.formGroup}
                >
                  <Form.Label>Product Title</Form.Label>
                  <Form.Control type="number" className={styles.formControl} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Default file input example</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="description"
                  className={styles.formGroup}
                >
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    cols={2}
                    rows={5}
                    type="text"
                    placeholder="Enter description"
                    className={styles.formControl}
                  />
                </Form.Group>
                <Form.Group
                  controlId="productQuantity"
                  className={styles.formGroup}
                >
                  <Form.Label>Product Quantity</Form.Label>
                  <Form.Control type="number" className={styles.formControl} />
                </Form.Group>
                <Form.Group
                  controlId="productSelling"
                  className={styles.formGroup}
                >
                  <Form.Label>Product Selling Price</Form.Label>
                  <Form.Control type="number" className={styles.formControl} />
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
