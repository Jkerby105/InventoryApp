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

export const ViewOrders = () => {
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
          <h2 className={styles.loginHeader}>Add Products</h2>
          <hr />
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead className="table-light">
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Product</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Order Date</th>
                  <th scope="col">Delivery Date</th>
                  <th scope="col">Delivery Status</th>
                  <th scope="col">Delivery Person</th>
                  <th scope="col">Delivery Mobile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>
                    <img
                      src="path/to/product-image.jpg"
                      alt="Product Image"
                      style={{
                        width: "50px",
                        height: "auto",
                        borderRadius: "4px",
                      }}
                    />
                  </td>
                  <td>Product Name</td>
                  <td>Product Description</td>
                  <td>$150.00</td>
                  <td>John Doe</td>
                  <td>123 Main St, City, State</td>
                  <td>2024-11-13</td>
                  <td>2024-11-20</td>
                  <td>
                    <span className="badge bg-warning">Pending</span>
                    {/* Use 'bg-success' for delivered and 'bg-danger' for canceled */}
                  </td>
                  <td>Jane Smith</td>
                  <td>(555) 123-4567</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};