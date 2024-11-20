import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card, Container, Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { FaDollarSign, FaShoppingCart, FaBox, FaUsers, FaTags, FaClipboardList, FaChartLine } from "react-icons/fa";
import styles from "../../styles/viewProducts.module.css"

export const InventoryData = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className={styles.navBar}>
            Inventory Management System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/login">Inventory Data</Nav.Link>
              <NavDropdown title="Products" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#home">Add Product</NavDropdown.Item>
                <NavDropdown.Item href="#home">View All Products</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Register" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#home">Register Supplier</NavDropdown.Item>
                <NavDropdown.Item href="#home">Register Delivery</NavDropdown.Item>
                <NavDropdown.Item href="#home">Register Admin</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Order" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#home">Assign Order Delivery</NavDropdown.Item>
                <NavDropdown.Item href="#home">View All Orders</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Category" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#home">Add Category</NavDropdown.Item>
                <NavDropdown.Item href="#home">View Categories</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/create-account">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-4">
       
        <Row className="mb-4">
          <Col md={4}>
            <Form.Control type="datetime-local" placeholder="Start Date" />
          </Col>
          <Col md={4}>
            <Form.Control type="datetime-local" placeholder="End Date" />
          </Col>
          <Col md={4}>
            <Button variant="primary" className="me-2">Retrieve</Button>
            <Button variant="secondary">Reset</Button>
          </Col>
        </Row>

        {/* Data Summary divs */}
        <Row className="gy-4">
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaDollarSign size={30} />
              <div>$300</div>
              <div>Today's Sale</div>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaChartLine size={30} />
              <div>$300</div>
              <div>Today's Profit</div>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaShoppingCart size={30} />
              <div>3</div>
              <div>Today's Orders</div>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaBox size={30} />
              <div>2</div>
              <div>Sold Products</div>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaUsers size={30} />
              <div>2</div>
              <div>Total Customers</div>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaTags size={30} />
              <div>2</div>
              <div>Total Categories</div>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaClipboardList size={30} />
              <div>3</div>
              <div>Total Products</div>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaShoppingCart size={30} />
              <div>5</div>
              <div>Total Orders</div>
            </div>
          </Col>
        </Row>

        <hr />

        <Row className="gy-4">
          <Col md={6}>
            <Card className={styles.loginCard}>
              <Card.Body>
                <h2 className={styles.loginHeader}>Top 5 Highest Sold Products</h2>
                <hr />
                <div className="table-responsive">
                  <table className="table table-hover table-striped">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Category</th>
                        <th scope="col">Sold Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Product A</td>
                        <td>Category 1</td>
                        <td>50</td>
                      </tr>
                      {/* Additional rows */}
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className={styles.loginCard}>
              <Card.Body>
                <h2 className={styles.loginHeader}>Top 5 Highest Profitable Products</h2>
                <hr />
                <div className="table-responsive">
                  <table className="table table-hover table-striped">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Category</th>
                        <th scope="col">Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Product B</td>
                        <td>Category 2</td>
                        <td>$500</td>
                      </tr>
                      {/* Additional rows */}
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
