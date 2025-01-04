import React, { useRef } from "react";

import styles from "../../styles/createAccount.module.css";
import { useSubmit, redirect } from "react-router-dom";
import { Form, Button, Card, Container, Navbar, Nav } from "react-bootstrap";
import axios from "axios";

export const CreateAccount = () => {
  const submit = useSubmit();

  let userName = useRef();
  let userLastName = useRef();
  let phone = useRef();
  let address = useRef();
  let email = useRef();
  let password = useRef();
  let role = useRef();

  function formSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userName", userName.current.value);
    formData.append("userLastName", userLastName.current.value);
    formData.append("phone", phone.current.value);
    formData.append("address", address.current.value);
    formData.append("email", email.current.value);
    formData.append("password", password.current.value);
    formData.append("role", role.current.value);

    submit(formData, { method: "POST" });
  }

  return (
    <>
      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>Create Account</h2>
          <Form onSubmit={formSubmit}>
            <Form.Group controlId="firstName" className={styles.formGroup}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                className={styles.formControl}
                ref={userName}
                required
              />
            </Form.Group>

            <Form.Group controlId="lastName" className={styles.formGroup}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                className={styles.formControl}
                ref={userLastName}
                required
              />
            </Form.Group>

            <Form.Group controlId="phoneNumber" className={styles.formGroup}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                className={styles.formControl}
                ref={phone}
                required
              />
            </Form.Group>

            <Form.Group controlId="address" className={styles.formGroup}>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                className={styles.formControl}
                ref={address}
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className={styles.formGroup}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className={styles.formControl}
                ref={email}
                required
              />
            </Form.Group>

            <Form.Group controlId="password" className={styles.formGroup}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                className={styles.formControl}
                minLength={10}
                ref={password}
                required
              />
            </Form.Group>

            <Form.Group controlId="role" className={styles.formGroup}>
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                className={styles.formControl}
                ref={role}
              >
                <option>Admin</option>
                <option>Driver</option>

              </Form.Control>
            </Form.Group>

            <Button type="submit" className={styles.loginButton}>
              Create Account
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export async function action({ request, params }) {
  const data = await request.formData();
  const accountCreation = {
    userName: data.get("userName"),
    lastName: data.get("userLastName"),
    phone: data.get("phone"),
    email: data.get("email"),
    address: data.get("address"),
    password: data.get("password"),
    role: data.get("role"),
  };

  const response = await axios.post(
    "http://localhost:3000/account/create",
    accountCreation
  );

  if (response.status !== 201) {
    throw new Error("unsuccessful account creation");
  }

  return redirect("/");
}


export async function loader({request,params}){

}