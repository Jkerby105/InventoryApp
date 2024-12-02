import React from "react";

import footer from "../styles/Account/footer.module.css";

import {Container,Nav } from "react-bootstrap";
export const Footer = () => {
  return (
    <>
      <footer className={footer.footer}>
        <Container className="text-center">
          <p className={footer.footerText}>
            © 2024 Inventory Management System. All rights reserved.
          </p>
          <Nav className="justify-content-center">
            <Nav.Link href="/terms" className={footer.footerLink}>
              Terms of Service
            </Nav.Link>
            <Nav.Link href="/privacy" className={footer.footerLink}>
              Privacy Policy
            </Nav.Link>
          </Nav>
        </Container>
      </footer>
    </>
  );
};
