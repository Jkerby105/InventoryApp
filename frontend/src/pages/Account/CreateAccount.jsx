import React, { useState } from "react";
import styles from "../../styles/createAccount.module.css";
import { Form, Button, Card } from "react-bootstrap";
import { useSubmit,redirect } from "react-router-dom";
import axios from "axios";

export const CreateAccount = () => {
  const submit = useSubmit(); 
  const [formData, setFormData] = useState({
    userName: "",
    userLastName: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    role: "Admin",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.userName.trim()) newErrors.userName = "First name is required";
    if (!formData.userLastName.trim())
      newErrors.userLastName = "Last name is required";
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.password.trim() || formData.password.length < 10)
      newErrors.password = "Password must be at least 10 characters long";
    return newErrors;
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

   
    const formDataAdmin = new FormData();
    formDataAdmin.append("userName", formData.userName);
    formDataAdmin.append("userLastName", formData.userLastName);
    formDataAdmin.append("phone", formData.phone);
    formDataAdmin.append("address", formData.address);
    formDataAdmin.append("email", formData.email);
    formDataAdmin.append("password", formData.password);
    formDataAdmin.append("role", formData.role);

    submit(formDataAdmin, { method: "POST" });

    // Submit the form if validation passes
    // console.log("Form submitted", formDataAdmin);
  };

  return (
    <Card className={styles.loginCard}>
      <Card.Body>
        <h2 className={styles.loginHeader}>Create Account</h2>
        <Form onSubmit={handleSubmit}>
          {[
            { id: "userName", label: "First Name" },
            { id: "userLastName", label: "Last Name" },
            { id: "phone", label: "Phone Number" },
            { id: "email", label: "Email" },
            { id: "address", label: "Address" },
            { id: "password", label: "Password", type: "password" },
          ].map((field) => (
            <Form.Group key={field.id} controlId={field.id} className={styles.formGroup}>
              <Form.Label>{field.label}</Form.Label>
              <Form.Control
                type={field.type || "text"}
                placeholder={`Enter ${field.label.toLowerCase()}`}
                className={styles.formControl}
                value={formData[field.id]}
                onChange={(e) =>
                  setFormData({ ...formData, [field.id]: e.target.value })
                }
              />
              {errors[field.id] && (
                <div className="text-danger">{errors[field.id]}</div>
              )}
            </Form.Group>
          ))}

          <Form.Group controlId="role" className={styles.formGroup}>
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              className={styles.formControl}
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            >
              <option >Admin</option>
              <option>SuperAdmin</option>
            </Form.Control>
          </Form.Group>

          <Button type="submit" className={styles.loginButton}>
            Create Account
          </Button>
        </Form>
      </Card.Body>
    </Card>
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

  console.log(accountCreation)

  const response = await axios.post(
    "http://localhost:3000/account/create",
    accountCreation
  );

  if (response.status !== 201) {
    throw new Error("unsuccessful account creation");
  }

  return redirect("/");
}

