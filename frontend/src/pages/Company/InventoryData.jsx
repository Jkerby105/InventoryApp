import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import {
  FaDollarSign,
  FaShoppingCart,
  FaBox,
  FaUsers,
  FaTags,
  FaClipboardList,
} from "react-icons/fa";
import styles from "../../styles/Admin/viewStyles.module.css";

export const InventoryData = () => {
  const startDateTime = useRef();
  const endDateTime = useRef();
  const navigate = useNavigate();
  const data = useLoaderData();
  const [orderSearchList, setOrderSearchList] = useState([]);

  const handleReset = () => {
    startDateTime.current.value = "";
    endDateTime.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      startDateTime: startDateTime.current.value,
      endDateTime: endDateTime.current.value,
    };

    if (formData.startDateTime && formData.endDateTime) {
      try {
        const response = await axios.post(
          `http://localhost:3000/admin/highestOrdered/`,
          formData
        );
        setOrderSearchList(response.data.orderSearchList);
      } catch (err) {
        console.error("Failed to fetch order data.");
      }
    }
  };

  return (
    <Container className="my-4">
      <Row className="gy-4">
        {/* Stats Cards */}
        <Col xs={12} sm={6} lg={3}>
          <Card
            className={`p-3 text-center ${styles.statCard}`}
            onClick={() => navigate("/admin/ViewSuppliers")}
          >
            <FaUsers size={30} />
            <div>{data.supplierCount[0].count}</div>
            <div>Total Suppliers</div>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <Card
            className={`p-3 text-center ${styles.statCard}`}
            onClick={() => navigate("/admin/AddCategory")}
          >
            <FaTags size={30} />
            <div>{data.categoryCount[0].count}</div>
            <div>Total Categories</div>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <Card
            className={`p-3 text-center ${styles.statCard}`}
            onClick={() => navigate("/admin/viewProducts")}
          >
            <FaClipboardList size={30} />
            <div>{data.productCount[0].count}</div>
            <div>Total Products</div>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <Card
            className={`p-3 text-center ${styles.statCard}`}
            onClick={() => navigate("/admin/Orders")}
          >
            <FaShoppingCart size={30} />
            <div>{data.orderCount[0].count}</div>
            <div>Total Orders</div>
          </Card>
        </Col>
      </Row>

      <Row className="gy-4 mt-4">
        {/* Top Products */}
        <Col xs={12} lg={6}>
          <Card className={styles.loginCard}>
            <Card.Body>
              <h2 className={styles.loginHeader}>
                Top 5 Highest Ordered Products
              </h2>
              <hr />
              <div className="table-responsive">
                <table className="table table-hover table-striped">
                  <thead className="table-light">
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.highestOrderProducts.map((order) => (
                      <tr key={order.productID}>
                        <td>{order.ProductName}</td>
                        <td>{order.TotalSold}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Order Search */}
        <Col xs={12} lg={6}>
          <Card className={styles.loginCard}>
            <Card.Body>
              <Form className="mb-4" onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col xs={12} md={6}>
                    <Form.Control
                      type="datetime-local"
                      placeholder="Start Date"
                      ref={startDateTime}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Control
                      type="datetime-local"
                      placeholder="End Date"
                      ref={endDateTime}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <Button type="submit" variant="primary" className="me-2">
                      Retrieve
                    </Button>
                    <Button variant="secondary" onClick={handleReset}>
                      Reset
                    </Button>
                  </Col>
                </Row>
              </Form>
              <h2 className={styles.loginHeader}>---- Orders ---</h2>
              <hr />
              <div className="table-responsive">
                <table className="table table-hover table-striped">
                  <thead className="table-light">
                    <tr>
                      <th>Organization</th>
                      <th>Order Date</th>
                      <th>Quantity</th>
                      <th>Product</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderSearchList.map((order) => (
                      <tr key={order.OrderID}>
                        <td>{order.Organization}</td>
                        <td>{new Date(order.OrderDate).toLocaleDateString()}</td>
                        <td>{order.TotalSold}</td>
                        <td>{order.ProductName}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};


export async function action({ request, params }) {}

export async function loader({ request, params }) {
  const response = await axios.get("http://localhost:3000/admin/inventory");

  if (response.status !== 201) {
    throw new Error("unsuccessful company creation");
  }

  return response.data;
}
