import React from "react";

import styles from "../styles/Admin/addProduct.module.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

export const AdminNav = () => {
  return (
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
              <NavDropdown.Item href="#home">View Suppliers</NavDropdown.Item>
              <hr />

              <NavDropdown.Item href="#home">
              Role Registration
              </NavDropdown.Item>
              <NavDropdown.Item href="#home">View Roles</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Category" id="collapsible-nav-dropdown">
              <Nav.Link href="/create-account">Add Category</Nav.Link>
              <Nav.Link href="/create-account">View Categories</Nav.Link>
            </NavDropdown>
            <NavDropdown title="Order" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#home">
                Assign Order Delivery
              </NavDropdown.Item>
              <NavDropdown.Item href="#home">View All Orders</NavDropdown.Item>
            </NavDropdown>


            <Nav.Link href="/create-account">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
