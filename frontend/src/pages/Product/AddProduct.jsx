import React from "react";
import axios from "axios";

import styles from "../../styles/Admin/addProduct.module.css";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import { useRef, useEffect, useState } from "react";
import { useSearchParams, useNavigate, useLoaderData } from "react-router-dom";

export const AddProduct = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const data = useLoaderData();

  const isUpdate = searchParams.get("update") === "true";
  const productId = searchParams.get("product");
  const [formData, setFormData] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

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
    const formData = new FormData();
    formData.append("Title", title.current.value);
    formData.append("Description", description.current.value);
    formData.append("productImage", imageFile.current.files[0]);
    formData.append("suppliedQuantity", quantity.current.value);
    formData.append("Supplier", supplier.current.value);
    formData.append("Category", category.current.value);

    let response;

    try {
      if (isUpdate) {
        response = await axios.put(
          `http://localhost:3000/admin/updateProduct/${productId}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      } else {
        response = await axios.post(
          "http://localhost:3000/admin/addProduct",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      }

      if (response.status !== 201) {
        throw new Error("unsuccessful company creation");
      }

      navigate("/admin/viewProducts");
    } catch (err) {
      setError("Failed to save supplier details.");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <Card className={`${styles.loginCard} my-4`}>
      <Card.Body>
        <h2 className="text-center mb-4">
          {isUpdate ? "Update Product" : "Add Product"}
        </h2>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Row className="gy-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="productName" className="mb-3">
                <Form.Label>Product Title</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={isUpdate ? formData.Title : ""}
                  ref={title}
                  placeholder="Enter product title"
                  required
                />
              </Form.Group>

              <Form.Group controlId="category" className="mb-3">
                <Form.Label>Select Category</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={isUpdate ? formData.subCategory : ""}
                  ref={category}
                  required
                >
                  {data.category.map((category) => (
                    <option
                      key={category.idCategory}
                      value={category.idCategory}
                    >
                      {category.Title}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="supplier" className="mb-3">
                <Form.Label>Select Supplier</Form.Label>
                <Form.Control as="select" ref={supplier} required>
                  {data.supplier.map((supplier) => (
                    <option
                      key={supplier.idSupplier}
                      value={supplier.idSupplier}
                    >
                      {supplier.companyName}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Select an Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  ref={imageFile}
                  onChange={handleImageChange}
                />
                <div className="mt-3">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Selected Preview"
                      style={{
                        maxWidth: "300px",
                        height: "auto",
                        border: "1px solid #ccc",
                        padding: "5px",
                      }}
                    />
                  ) : (
                    formData.productImage && (
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
                    )
                  )}
                </div>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="description" className="mb-3">
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  defaultValue={isUpdate ? formData.Description : ""}
                  ref={description}
                  placeholder="Enter product description"
                  required
                />
              </Form.Group>

              <Form.Group controlId="productQuantity" className="mb-3">
                <Form.Label>Product Quantity</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={isUpdate ? formData.productQuantity : ""}
                  ref={quantity}
                  placeholder="Enter product quantity"
                  min={1}
                  max={100}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Button
              type="submit"
              variant="primary"
              className={styles.loginButton}
            >
              {isUpdate ? "Update Product" : "Add Product"}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
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
