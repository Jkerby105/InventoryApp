import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "../../styles/registerSupplier.module.css";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import { useSearchParams, useNavigate } from "react-router-dom";

export const RegisterSupplier = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const isUpdate = searchParams.get("update") === "true";
  const supplierId = searchParams.get("supplier");

  const [formData, setFormData] = useState([]);

  const name = useRef();
  const phone = useRef();
  const address = useRef();
  const email = useRef();


  const [error, setError] = useState(null);

  useEffect(() => {
    if (isUpdate && supplierId) {
      const fetchSupplier = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/admin/supplier/${supplierId}`
          );
          setFormData(response.data.data[0]);
        } catch (err) {
          setError("Failed to fetch supplier details.");
        }
      };
      fetchSupplier();
    }
  }, [isUpdate, supplierId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData ={
    idSupplier: supplierId,
    companyName: name.current.value,
    companyEmail: email.current.value,
    companyAddress: address.current.value,
    companyPhone: phone.current.value,
    }
    
    try {
      if (isUpdate) {
        await axios.put(
          `http://localhost:3000/admin/updateSupplier/${supplierId}`,
          formData
        );
      } else {
        await axios.post("http://localhost:3000/admin/addSupplier", formData);
      }

      navigate("/");
    } catch (err) {
      setError("Failed to save supplier details.");
    }
  };

  return (
    <Card className={styles.loginCard}>
      <Card.Body>
        <h2 className={styles.loginHeader}>
          {isUpdate ? "Update Supplier" : "Add Supplier"}
        </h2>
        {error && <p className="text-danger">{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="companyName" className={styles.formGroup}>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  defaultValue={
                    isUpdate === true 
                      ? formData.companyName
                      : ""
                  }
                  ref={name}
                  placeholder="Enter company name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="email" className={styles.formGroup}>
                <Form.Label>Company Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  defaultValue={
                    isUpdate === true 
                      ? formData.companyEmail
                      : ""
                  }
                  ref={email}
                  placeholder="Enter company email"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="address" className={styles.formGroup}>
                <Form.Label>Company Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"

                  defaultValue={
                    isUpdate === true 
                      ? formData.companyAddress
                      : ""
                  }
                  ref={address}
                  placeholder="Enter company address"
                  required
                />
              </Form.Group>
              <Form.Group controlId="phone" className={styles.formGroup}>
                <Form.Label>Company Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  defaultValue={
                    isUpdate === true 
                      ? formData.companyPhone
                      : ""
                  }
                  ref={phone}
                  placeholder="Enter company phone"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit" className={styles.loginButton}>
            {isUpdate ? "Update Supplier" : "Add Supplier"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};


