import React from "react";
import styles from "../styles/Account/Navbar.module.css";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export const AdminNav = () => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    return navigate("/");
  }

  return (
    <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/admin" className={`${styles.brand} me-auto`}>
          Jacksonville Community Giving Foundation
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className={`ms-auto ${styles.navLinks}`}>
          <Nav>
            <Nav.Item>
              <Nav.Link href="/admin" className={styles.navLink}>
                Inventory Data
              </Nav.Link>
            </Nav.Item>

            <NavDropdown title="Products" id="collapsible-nav-dropdown" className={styles.navDropdown}>
              <NavDropdown.Item href="/admin/AddProduct/?update=false&product=null" className={styles.dropdownItem}>
                Add Product
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/viewProducts" className={styles.dropdownItem}>
                View All Products
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Category" id="collapsible-nav-dropdown" className={styles.navDropdown}>
              <Nav.Link href="/admin/AddCategory" className={styles.dropdownItem}>
                Add & View Category
              </Nav.Link>
            </NavDropdown>

            <NavDropdown title="Order" id="collapsible-nav-dropdown" className={styles.navDropdown}>
              <NavDropdown.Item href="/admin/assignOrder" className={styles.dropdownItem}>
                Assign Order
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/Orders" className={styles.dropdownItem}>
                View All Orders
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Register" id="collapsible-nav-dropdown" className={styles.navDropdown}>
              <NavDropdown.Item href="/admin/AddSupplier/?update=false&supplier=null" className={styles.dropdownItem}>
                Register Supplier
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/ViewSuppliers" className={styles.dropdownItem}>
                View Suppliers
              </NavDropdown.Item>
              <hr className={styles.divider} />
              <NavDropdown.Item href="/admin/CreateAccount" className={styles.dropdownItem}>
                Add Admin
              </NavDropdown.Item>
              <NavDropdown.Item href="/Login/CreateAccount" className={styles.dropdownItem}>
                View Admins
              </NavDropdown.Item>
            </NavDropdown>

            {/* Logout Button */}
            <Nav.Item className="ms-4">
              <Button variant="secondary" className={styles.logoutButton} onClick={handleLogout}>
                Logout
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
