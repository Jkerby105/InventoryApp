import React from "react";
import footer from "../../styles/Account/footer.module.css";
import { AccountNav } from "../../components/AccountNav";
import {Container, Nav } from "react-bootstrap";

export const AboutUs = () => {
  return (
    <>
      <AccountNav/>

      <Container
        style={{ marginTop: "40px", padding: "20px", maxWidth: "800px" }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#333",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          About Us
        </h2>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h1
            style={{ color: "#004aad", fontSize: "2.5rem", fontWeight: "bold" }}
          >
            Jacksonville Community Giving Foundation
          </h1>
          <hr
            style={{
              width: "60%",
              margin: "auto",
              border: "1px solid #004aad",
            }}
          />
        </div>

        <div style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#444" }}>
          <p>
            Based in Jacksonville, FL, the Jacksonville Community Giving
            Foundation has been dedicated to uplifting individuals and families
            in need for over 20 years. As a nonprofit organization, we focus on
            collecting donations—whether financial contributions, food,
            clothing, or essential supplies—and distributing them directly to
            those facing hardship. Our work has touched thousands of lives,
            offering hope and tangible support to struggling families, the
            homeless, and underserved communities across the region.
          </p>

          <h2
            style={{ color: "#004aad", marginTop: "30px", fontSize: "1.8rem" }}
          >
            Our Impact on the Community
          </h2>
          <p>
            For more than two decades, we have built strong relationships with
            local businesses, volunteers, and community partners to maximize our
            reach. Through food drives, shelter support programs, educational
            initiatives, and emergency assistance, we have helped countless
            individuals regain stability and self-sufficiency. We believe that
            no one should have to choose between basic necessities, and our
            mission is to bridge the gap for those in crisis.
          </p>

          <h2
            style={{ color: "#004aad", marginTop: "30px", fontSize: "1.8rem" }}
          >
            Continuing Our Mission
          </h2>
          <p>
            Our commitment to Jacksonville’s community remains stronger than
            ever. With every donation we receive, we ensure that resources are
            allocated efficiently and directly benefit those who need them most.
            We continuously expand our outreach programs, working closely with
            shelters, schools, and community centers to provide immediate relief
            and long-term solutions for individuals and families facing
            difficult times.
          </p>

          <h2
            style={{ color: "#004aad", marginTop: "30px", fontSize: "1.8rem" }}
          >
            Our Beliefs and Motto
          </h2>
          <p
            style={{
              fontStyle: "italic",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            "Giving with Purpose, Changing Lives."
          </p>
          <p>
            At Jacksonville Community Giving Foundation, we believe in the power
            of compassion, unity, and action. We strive to create a world where
            generosity meets necessity, where no one in our community is left
            behind, and where hope is restored through collective effort.
          </p>

          <p
            style={{
              textAlign: "center",
              fontSize: "1.3rem",
              fontWeight: "bold",
              marginTop: "30px",
            }}
          >
            Through the support of our donors, volunteers, and local
            partnerships, we continue to be a pillar of hope in Jacksonville.
            Whether you’re looking to give, volunteer, or receive assistance, we
            welcome you to be part of our mission—because together, we can build
            a stronger, more compassionate community.
          </p>
        </div>
      </Container>

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
