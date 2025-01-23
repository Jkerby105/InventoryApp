import React from 'react'

import styles from "../../styles/login.module.css"
import footer from "../../styles/Account/footer.module.css";

import { Form, Button, Card, Container, Navbar, Nav } from "react-bootstrap";

export const AboutUs = () => {
  return (
   <>
   
   <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home" className={styles.navBar}>Inventory Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                <Nav.Link href="/k">Login</Nav.Link>
                <Nav.Link href="/AboutUs">
                  About Us
                </Nav.Link>
              </Nav> 
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Container className="mt-5">
        <h2 className={styles.loginHeader}>About Us</h2>
        <p>We are a leading provider of inventory management solutions designed to streamline operations and improve efficiency for businesses. Our system helps you manage products, orders, and customers with ease, allowing you to focus on what matters most — growing your business.</p>
      </Container>

    
        <footer className={footer.footer}>
            <Container className="text-center">
              <p className={footer.footerText}>© 2024 Inventory Management System. All rights reserved.</p>
              <Nav className="justify-content-center">
                <Nav.Link href="/terms" className={footer.footerLink}>Terms of Service</Nav.Link>
                <Nav.Link href="/privacy" className={footer.footerLink}>Privacy Policy</Nav.Link>
              </Nav>
            </Container>
          </footer>
   </>
  )
}