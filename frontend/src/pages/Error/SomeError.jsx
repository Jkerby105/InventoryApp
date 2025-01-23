import React from "react";
import { Card, Button, Container } from "react-bootstrap";

export const SomeError = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-lg text-center p-4" style={{ maxWidth: "600px" }}>
        <Card.Body>
          <Card.Title className="text-danger fs-1">Oops! Error</Card.Title>
          <Card.Text className="mt-3 text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et,
            ipsam debitis amet unde ab necessitatibus est velit! Natus adipisci
            inventore eligendi aut vel voluptate nobis id dignissimos animi
            quod?
          </Card.Text>
          <Button variant="primary" className="mt-4" onClick={handleGoBack}>
            Go Back
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
