import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/userCart.module.css";
import {
  Form,
  Button,
  Card,
  Table,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

export const UserCart = () => {
  return (
    <Container className={styles.cartContainer}>
      <h2 className={styles.cartHeader}>Shopping Cart</h2>
      <p className={styles.itemCount}>3 items</p>

      <Card className={styles.cartCard}>
        <Card.Body>
          <Table hover className={styles.cartTable}>
            <thead className="table-light">
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="product-image.jpg"
                    alt="Product"
                    className={styles.productImage}
                  />
                  Product Name
                </td>
                <td>
                  <div className={styles.quantityControls}>
                    <Button variant="light" size="sm">
                      <FaMinus />
                    </Button>
                    <span className={styles.quantity}>4</span>
                    <Button variant="light" size="sm">
                      <FaPlus />
                    </Button>
                  </div>
                </td>
                <td>$20.99</td>
                <td>$83.96</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer className={styles.cartFooter}>
          <div className={styles.totalCost}>
            <span>Total Cost:</span>
            <span>$83.96</span>
          </div>
          <Button className={styles.checkoutButton}>Checkout</Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};
