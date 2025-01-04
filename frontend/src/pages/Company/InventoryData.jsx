import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card, Container, Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import { FaDollarSign, FaShoppingCart, FaBox, FaUsers, FaTags, FaClipboardList, FaChartLine } from "react-icons/fa";
import styles from "../../styles/Admin/viewProducts.module.css"

export const InventoryData = () => {
  return (
    <>

      <Container className="my-4">
       
        <Row className="mb-4">
          <Col md={4}>
            <Form.Control type="datetime-local" placeholder="Start Date" />
          </Col>
          <Col md={4}>
            <Form.Control type="datetime-local" placeholder="End Date" />
          </Col>
          <Col md={4}>
            <Button variant="primary" className="me-2">Retrieve</Button>
            <Button variant="secondary">Reset</Button>
          </Col>
        </Row>

        {/* Data Summary divs */}
        <Row className="gy-4">
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaDollarSign size={30} />
              <div>$300</div>
              <div>Today's Sale</div>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaChartLine size={30} />
              <div>$300</div>
              <div>Today's Profit</div>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaShoppingCart size={30} />
              <div>3</div>
              <div>Today's Orders</div>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaBox size={30} />
              <div>2</div>
              <div>Sold Products</div>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaUsers size={30} />
              <div>2</div>
              <div>Total Customers</div>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaTags size={30} />
              <div>2</div>
              <div>Total Categories</div>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaClipboardList size={30} />
              <div>3</div>
              <div>Total Products</div>
            </div>
          </Col>
          <Col md={3}>
            <div className="p-3 border rounded text-center">
              <FaShoppingCart size={30} />
              <div>5</div>
              <div>Total Orders</div>
            </div>
          </Col>
        </Row>

        <hr />

        <Row className="gy-4">
          <Col md={6}>
            <Card className={styles.loginCard}>
              <Card.Body>
                <h2 className={styles.loginHeader}>Top 5 Highest Sold Products</h2>
                <hr />
                <div className="table-responsive">
                  <table className="table table-hover table-striped">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Category</th>
                        <th scope="col">Sold Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Product A</td>
                        <td>Category 1</td>
                        <td>50</td>
                      </tr>
                      {/* Additional rows */}
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className={styles.loginCard}>
              <Card.Body>
                <h2 className={styles.loginHeader}>Top 5 Highest Profitable Products</h2>
                <hr />
                <div className="table-responsive">
                  <table className="table table-hover table-striped">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Category</th>
                        <th scope="col">Profit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Product B</td>
                        <td>Category 2</td>
                        <td>$500</td>
                      </tr>
                      {/* Additional rows */}
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export async function action({request,params}){

}


export async function loader({request,params}){

}