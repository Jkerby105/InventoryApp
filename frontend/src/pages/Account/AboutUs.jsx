import React from 'react'

import styles from "../../styles/login.module.css"
import footer from "../../styles/Account/footer.module.css";

import { Form, Button, Card, Container, Navbar, Nav } from "react-bootstrap";

export const AboutUs = () => {
  return (
   <>
        <Container className="mt-5">
        <h2 className={styles.loginHeader}>About Us</h2>
        <p>We are a leading provider of inventory management solutions designed to streamline operations and improve efficiency for businesses. Our system helps you manage products, orders, and customers with ease, allowing you to focus on what matters most — growing your business.</p>
      </Container>
   </>
  )
}
