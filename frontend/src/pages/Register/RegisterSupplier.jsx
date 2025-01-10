import React, { useRef, useEffect, useState, Children } from "react";
import axios from "axios";

import styles from "../../styles/registerSupplier.module.css";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import { useSubmit, redirect, useSearchParams } from "react-router-dom";

export const RegisterSupplier = () => {
  let [update] = useSearchParams();

  const submit = useSubmit();

  const [supplier, setSuppliers] = useState([]);

  const name = useRef();
  const phone = useRef();
  const address = useRef();
  const email = useRef();

  function companyCreation(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name.current.value);
    formData.append("phone", phone.current.value);
    formData.append("address", address.current.value);
    formData.append("email", email.current.value);
    formData.append("supplierID", update.get("supplier"));

    submit(formData, { method: "POST" });
  }

  useEffect(() => {
    async function getSupplier() {
      try {
        const supplierId = update.get("supplier");
        const response = await axios.get(
          "http://localhost:3000/admin/supplier/" + supplierId
        );

        // if (response.status !== 201) {
        //   throw new Error("unsuccessful company creation");
        // }

        if (response.data.data.length > 0) setSuppliers(response.data.data[0]);
        else setSuppliers(null);
      } catch (error) {
        throw new Error("Could not retrieve company");
      }
    }

    const isUpdate = update.get("update");
    console.log(typeof isUpdate);
    console.log(isUpdate === "true");
    console.log(isUpdate instanceof String);

    if (isUpdate === "true") {
      getSupplier();
    }
  }, [update]);

  return (
    <>
      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>Add Supplier</h2>
          <Form onSubmit={companyCreation}>
            <Row>
              <Col>
                <Form.Group
                  controlId="companyName"
                  className={styles.formGroup}
                >
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter companies name"
                    defaultValue={
                      supplier !== null
                        ? supplier.companyName
                        : "Enter companies name"
                    }
                    className={styles.formControl}
                    ref={name}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email" className={styles.formGroup}>
                  <Form.Label>Company Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={
                      supplier ? supplier.companyEmail : "Enter companies email"
                    }
                    defaultValue={
                      supplier !== null
                        ? supplier.companyEmail
                        : "Enter companies email"
                    }
                    className={styles.formControl}
                    ref={email}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="address" className={styles.formGroup}>
                  <Form.Label>Company Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={
                      supplier
                        ? supplier.companyAddress
                        : "Enter companies address"
                    }
                    defaultValue={
                      supplier !== null
                        ? supplier.companyAddress
                        : "Enter companies address"
                    }
                    className={styles.formControl}
                    ref={address}
                    required
                  />
                </Form.Group>
                <Form.Group
                  controlId="phoneNumber"
                  className={styles.formGroup}
                >
                  <Form.Label>Company Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={
                      supplier ? supplier.companyPhone : "Enter companies phone"
                    }
                    defaultValue={
                      supplier !== null
                        ? supplier.companyPhone
                        : "Enter companies phone"
                    }
                    className={styles.formControl}
                    ref={phone}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit" className={styles.loginButton}>
              {supplier ? "Update Supplier" : "Add Supplier"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export async function action({ request, params }) {
  const data = await request.formData();
  const value = data.get("supplierID");
  console.log(value);
  console.log(typeof value);
  let val = value.localeCompare("null");
  console.log(val);
  console.log(typeof val);

  let updateStatus = false;

  if (val > 0 || val < 0) {
    console.log("true");
    updateStatus = true;
  }

  console.log("Is update " + updateStatus);

  const companyCreation = {
    companyName: data.get("name"),
    companyAddress: data.get("address"),
    companyPhone: data.get("phone"),
    companyEmail: data.get("email"),
  };

  console.log(companyCreation);
  let response;

  if (updateStatus) {
    console.log("--------------------------------------")
    console.log("Update");
    console.log(value);
    console.log(companyCreation)
    response = await axios.put(
      "http://localhost:3000/admin/updateSupplier/ " + value,
      companyCreation
    );
  } else {
    console.log("New");
    response = await axios.post(
      "http://localhost:3000/admin/addSupplier",
      companyCreation
    );
  }

  if (response.status !== 201) {
    throw new Error("unsuccessful company creation");
  }

  return redirect("/");
}
