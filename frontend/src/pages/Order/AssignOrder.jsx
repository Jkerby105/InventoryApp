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

export const AssignOrder = () => {
  return (
    <>
      <Card className={styles.loginCard}>
        <div className="container mt-3">
          <div className="d-flex justify-content-center">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search..."
              style={{ maxWidth: "400px" }}
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </div>

        <Card.Body>
          <h2 className={styles.loginHeader}>Search Customer Order</h2>
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

      <Container className={styles.formContainer}>
        <h2 className={styles.formHeader}>Assign Delivery</h2>
        <Form className="d-flex align-items-center">
          <Form.Group
            controlId="orderId"
            className={`${styles.formGroup} me-3`}
          >
            <Form.Label>Order ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Order ID"
              className={styles.formControl}
            />
          </Form.Group>

          <Form.Group
            controlId="deliveryPerson"
            className={`${styles.formGroup} me-3`}
          >
            <Form.Label>Delivery Person</Form.Label>
            <Form.Control as="select" className={styles.formControl}>
              <option>Select Delivery Person</option>
              <option>John Doe</option>
              <option>Jane Smith</option>
              <option>Alex Johnson</option>
            </Form.Control>
          </Form.Group>

          <Button type="submit" className={styles.submitButton}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};
