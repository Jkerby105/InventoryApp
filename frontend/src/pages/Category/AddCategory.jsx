import React, { useState, useRef, useEffect } from "react";
import Modal from "../../components/modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  ListGroup,
} from "react-bootstrap";
import { useSubmit } from "react-router-dom";
import axios from "axios";

export const AddCategory = () => {
  const submit = useSubmit();
  const dialog = useRef();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [categoryUpdate, setCategoryUpdate] = useState(false);
  const [categoryID, setCategoryID] = useState(null);
  const categoryInput = useRef();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/categories"
        );

        setCategories(response.data.categories);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    fetchCategories();
  }, []);

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (categoryID !== null) formData.append("categoryID", categoryID);
    formData.append("category", categoryInput.current.value);
    submit(formData, { method: "POST" });
  };

  const handleDeleteCategory = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("categoryID", categoryID);
    submit(formData, { method: "DELETE" });
  };

  const prepareForUpdate = (id) => {
    setCategoryID(id);
    setCategoryUpdate(true);
  };

  const resetUpdateState = () => {
    setCategoryID(null);
    setCategoryUpdate(false);
  };

  return (
    <Container className="mt-5">
      <Modal ref={dialog} removeItem={handleDeleteCategory} />

      <Row>
        <Col md={6}>
          <Card className="shadow">
            <Card.Body>
              <h2 className="text-center">
                {categoryUpdate ? "Update Category" : "Add Category"}
              </h2>
              <Form onSubmit={handleCategorySubmit} className="mt-4">
                {categoryUpdate && (
                  <Form.Group controlId="categoryID" className="mb-3">
                    <Form.Label>ID Number</Form.Label>
                    <Form.Control type="number" value={categoryID} readOnly />
                  </Form.Group>
                )}
                <Form.Group controlId="categoryInput" className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category"
                    ref={categoryInput}
                    required
                  />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <Button type="submit" variant="success">
                    {categoryUpdate ? "Update" : "Submit"}
                  </Button>
                  {categoryUpdate && (
                    <Button variant="secondary" onClick={resetUpdateState}>
                      Cancel
                    </Button>
                  )}
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <h2 className="text-center">Categories and Products</h2>
          <Row className="gy-3">
            {categories.map((category) => (
              <Col lg={6} key={category.CategoryID}>
                <Card className="shadow-sm">
                  <Card.Header className="d-flex justify-content-between align-items-center bg-primary text-white">
                    <span>{category.CategoryTitle}</span>
                    <Button
                      variant="info"
                      size="sm"
                      onClick={() => prepareForUpdate(category.CategoryID)}
                    >
                      Update
                    </Button>
                  </Card.Header>

                  <Card.Body>
                    <ListGroup variant="flush">
                      {products
                        .filter((p) => p.subCategoryID === category.CategoryID)
                        .map((product, index) => (
                          <ListGroup.Item key={product.ProductID}>
                            <strong>{product.ProductTitle}</strong>:{" "}
                            {product.ProductQuantity} units
                          </ListGroup.Item>
                        ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export async function action({ request, params }) {
  const data = await request.formData();
  const categoryID = data.get("categoryID");
  const category = data.get("category");

  const categoryBody = {
    category: data.get("category"),
    categoryID: data.get("categoryID"),
  };

  let response;

  if (category === null) {
    response = await axios.delete(
      "http://localhost:3000/admin/category/ " + categoryID,
      categoryBody
    );
  } else if (categoryID === null) {
    response = await axios.post(
      "http://localhost:3000/admin/addCategory/",
      categoryBody
    );
  } else {
    response = await axios.put(
      "http://localhost:3000/admin/updateCategory/ " + categoryID,
      categoryBody
    );
  }

  if (response.status !== 201) {
    throw new Error("unsuccessful company creation");
  }

  return redirect("/admin");
}
