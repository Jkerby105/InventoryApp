import React from "react";

import styles from "../../styles/Admin/addProduct.module.css";
import {
  Form,
  Button,
  Card,
  Col,
  Row,
} from "react-bootstrap";
import { useRef } from "react";
import { useSubmit, redirect } from "react-router-dom";

export const AddProduct = () => {

  const title = useRef();
  const category = useRef();
  const supplier = useRef();
  const description = useRef();
  const quantity = useRef();
  const purchasePrice = useRef();
  const sellingPrice = useRef();

  const imageFile = useRef();

  function productCreation(e){
    e.preventDefault();

    console.log(title.current.value);
    console.log(category.current.value);
    console.log(supplier.current.value);
    console.log(description.current.value);
    console.log(quantity.current.value);
    console.log(purchasePrice.current.value);
    console.log(sellingPrice.current.value);
    console.log(imageFile.current.value);


  }

  return (
    <>
      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>Add Product</h2>
          <Form onSubmit={productCreation}>
            <Row>
              <Col>
                <Form.Group
                  controlId="productName"
                  className={styles.formGroup}
                >
                  <Form.Label>Product Title</Form.Label>
                  <Form.Control
                    type="text"
                    className={styles.formControl}
                    ref={title}
                  />
                </Form.Group>
                <Form.Group controlId="category" className={styles.formGroup}>
                  <Form.Label>Select Category</Form.Label>
                  <Form.Control as="select" ref={category}>
                    <option>1</option>
                    <option>2</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="supplier" className={styles.formGroup}>
                  <Form.Label>Select Supplier</Form.Label>
                  <Form.Control as="select" ref={supplier}>
                    <option>1</option>
                    <option>2</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group
                  controlId="purchasePrise"
                  className={styles.formGroup}
                >
                  <Form.Label>Purchase Price</Form.Label>
                  <Form.Control type="text" className={styles.formControl} ref={purchasePrice}/>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Default imageFile input example</Form.Label>
                  <Form.Control type="file" ref={imageFile}/>
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
                    ref={description}
                  />
                </Form.Group>
                <Form.Group
                  controlId="productQuantity"
                  className={styles.formGroup}
                >
                  <Form.Label>Product Quantity</Form.Label>
                  <Form.Control type="number" className={styles.formControl} ref={quantity}/>
                </Form.Group>
                <Form.Group
                  controlId="productSelling"
                  className={styles.formGroup}
                >
                  <Form.Label>Product Selling Price</Form.Label>
                  <Form.Control type="text" className={styles.formControl} ref={sellingPrice}/>
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

export function action({request,params}){

}
