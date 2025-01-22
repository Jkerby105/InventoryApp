import React, { useState } from "react";
import axios from "axios";
import styles from "../../styles/addElementStyles.module.css";
import {
  useNavigate,
  useLoaderData,
} from "react-router-dom";

import {
  Form,
  Button,
  Card,
  Col,
  Row,
} from "react-bootstrap";
import { useRef } from "react";

export const AssignOrder = () => {
  const [selectedProductId, setSelectedProductId] = useState("");
  const [maxQuantity, setMaxQuantity] = useState(null);

  const organizationName = useRef();
  const organizationAddress = useRef();
  const organizationEmail = useRef();
  const organizationNumber = useRef();
  const selectedAmount = useRef();
  const navigate = useNavigate();

  const products = useLoaderData();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData ={
      organizationName: organizationName.current.value,
      organizationEmail: organizationEmail.current.value,
      organizationAddress: organizationAddress.current.value,
      organizationNumber: organizationNumber.current.value,
      selectedProduct: selectedProductId,
      productAmount: selectedAmount.current.value
      }

          try {
             const response =  await axios.post(
                `http://localhost:3000/admin/addOrder`,
                formData
              );

              if (response.status !== 201) {
                throw new Error("unsuccessful company creation");
              }

            navigate("/admin");
          } catch (err) {
            setError("Failed to save supplier details.");
          }

  }

  const handleProductChange = (e) => {
    const selectedTitle = e.target.value;
    const product = products.find((product) => product.Title === selectedTitle);

    if (product) {
      setSelectedProductId(product.idProduct);
      setMaxQuantity(product.productQuantity); 
    } else {
      setMaxQuantity(null); 
    }
  };

  return (
    <>
      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>Assign Order</h2>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group
                  controlId="companyName"
                  className={styles.formGroup}
                >
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    ref={organizationName}
                    placeholder="Enter company name"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email" className={styles.formGroup}>
                  <Form.Label>Company Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    ref={organizationEmail}
                    placeholder="Enter company email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="product" className={styles.formGroup}>
                  <Form.Label>Select Product</Form.Label>
                  <Form.Control as="select" onChange={handleProductChange}>
                    <option value="">Select a product</option>
                    {products.map((product) => (
                      <option key={product.idProduct} value={product.Title}>
                        {product.Title}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>


              </Col>
              <Col>
                <Form.Group controlId="address" className={styles.formGroup}>
                  <Form.Label>Organization Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    ref={organizationAddress}
                    placeholder="Enter company address"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="phone" className={styles.formGroup}>
                  <Form.Label>Organization Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    ref={organizationNumber}
                    placeholder="Enter company phone"
                    required
                  />
                </Form.Group>

                <Form.Group
                  controlId="productQuantity"
                  className={styles.formGroup}
                >
                  <Form.Label>Product Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    max={maxQuantity || ""}
                    min={0}
                    className={styles.formControl}
                    ref={selectedAmount}
                    disabled={!maxQuantity}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit" className={styles.loginButton}>
              Send Order
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export async function loader({ request, params }) {
  const response = await axios.get("http://localhost:3000/admin/products/");

  if (response.status !== 201) {
    throw new Error("unsuccessful company creation");
  }

  return response.data.data;
}
