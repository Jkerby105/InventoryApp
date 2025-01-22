import React, { useState } from "react";
import styles from "../../styles/login.module.css";
import { Form, Button, Card } from "react-bootstrap";

export const Login = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ username: "", password: "" });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  };

  return (
    <Card className={styles.loginCard}>
      <Card.Body>
        <h2 className={styles.loginHeader}>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username" className={styles.formGroup}>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              className={styles.formControl}
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            {errors.username && (
              <div className="text-danger">{errors.username}</div>
            )}
          </Form.Group>

          <Form.Group controlId="password" className={styles.formGroup}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              className={styles.formControl}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}
          </Form.Group>

          <Button type="submit" className={styles.loginButton}>
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
