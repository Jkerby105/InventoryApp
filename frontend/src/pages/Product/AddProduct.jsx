import React from "react";
import axios from "axios";

import styles from "../../styles/Admin/addProduct.module.css";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import { useRef, useEffect, useState } from "react";
import {
  useSubmit,
  redirect,
  useSearchParams,
  useNavigate,
  useLoaderData,
} from "react-router-dom";

export const AddProduct = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const data = useLoaderData();

  const isUpdate = searchParams.get("update") === "true";
  const productId = searchParams.get("product");
  const [formData, setFormData] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  // console.log(formData);

  const title = useRef();
  const category = useRef();
  const supplier = useRef();
  const description = useRef();
  const quantity = useRef();
  const imageFile = useRef();

  useEffect(() => {
    if (isUpdate && productId) {
      const fetchSupplier = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/admin/product/${productId}`
          );
          setFormData(response.data.data);
        } catch (err) {
          throw new Error("Error occurred");
        }
      };
      fetchSupplier();
    }
  }, [isUpdate, productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productImage = imageFile.current.files[0];
    const formData = new FormData();
    formData.append("Title", title.current.value);
    formData.append("Description", description.current.value);
    formData.append("productImage", imageFile.current.files[0]);
    formData.append("suppliedQuantity", quantity.current.value);
    formData.append("Supplier", supplier.current.value);
    formData.append("Category", category.current.value);

    // console.log(formData);

    try {
      if (isUpdate) {

        console.log(formData)

        await axios.put(
          `http://localhost:3000/admin/updateProduct/${productId}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        await axios.post("http://localhost:3000/admin/addProduct", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      navigate("/");
    } catch (err) {
      setError("Failed to save supplier details.");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Generate a temporary URL for the selected file
    }
  };

  return (
    <>
      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>Add Product</h2>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
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
                    defaultValue={isUpdate === true ? formData.Title : ""}
                    ref={title}
                  />
                </Form.Group>

                <Form.Group controlId="category" className={styles.formGroup}>
                  <Form.Label>Select Category</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue={isUpdate === true ? formData.subCategory : ""}
                    ref={category}
                  >
                    {data.category.map((category) => (
                      <option key={category.idCategory}>
                        {category.Title}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="supplier" className={styles.formGroup}>
                  <Form.Label>Select Supplier</Form.Label>
                  <Form.Control as="select" ref={supplier}>
                    {data.supplier.map((supplier) => (
                      <option key={supplier.idSupplier}>
                        {supplier.companyName}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Select an image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    ref={imageFile}
                    onChange={handleImageChange}
                  />

                  {imagePreview ? (
                    <div style={{ marginTop: "10px" }}>
                      <img
                        src={imagePreview}
                        alt="Selected Preview"
                        style={{
                          maxWidth: "200px",
                          height: "auto",
                          border: "1px solid #ccc",
                          padding: "5px",
                        }}
                      />
                    </div>
                  ) : (
                    <div style={{ marginTop: "10px" }}>
                      <img
                        src={formData.productImage}
                        alt={formData.Title}
                        style={{
                          maxWidth: "200px",
                          height: "auto",
                          border: "1px solid #ccc",
                          padding: "5px",
                        }}
                      />
                    </div>
                  )}
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
                    defaultValue={isUpdate === true ? formData.Description : ""}
                    ref={description}
                  />
                </Form.Group>
                <Form.Group
                  controlId="productQuantity"
                  className={styles.formGroup}
                >
                  <Form.Label>Product Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    className={styles.formControl}
                    defaultValue={
                      isUpdate === true ? formData.productQuantity : ""
                    }
                    ref={quantity}
                  />
                </Form.Group>
              </Col>
            </Row>
            {/* <Button type="submit" className={styles.loginButton}>
              Add Product
            </Button> */}
                      <Button type="submit" className={styles.loginButton}>
                        {isUpdate ? "Update Supplier" : "Add Supplier"}
                      </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export async function action({ request, params }) {}

export async function loader({ request, params }) {
  const response = await axios.get(
    "http://localhost:3000/admin/SuppliersCategories"
  );

  if (response.status !== 201) {
    throw new Error("unsuccessful company creation");
  }

  return response.data;
}
