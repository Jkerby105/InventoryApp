import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Admin/viewProducts.module.css";
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

export const ViewProducts = () => {
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
                <NavDropdown.Item href="#home">All Product</NavDropdown.Item>
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
          <h2 className={styles.loginHeader}>Add Products</h2>
          <hr />
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Category</th>
                  <th scope="col">Supplier</th>
                  <th scope="col">Available Quantity</th>
                  <th scope="col">Supplied Quantity</th>
                  <th scope="col">Purchase Price</th>
                  <th scope="col">Selling Price</th>
                  <th scope="col">Profit/Loss</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>image</td>
                  <td>Product Name</td>
                  <td>Short description of the product.</td>
                  <td>Category Name</td>
                  <td>Supplier Name</td>
                  <td>120</td>
                  <td>200</td>
                  <td>$50.00</td>
                  <td>$75.00</td>
                  <td>$25.00</td>
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary">Update</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
