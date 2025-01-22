import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Admin/viewStyles.module.css";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

import { Card } from "react-bootstrap";

export const ViewOrders = () => {
  const ordersList = useLoaderData();

  return (
    <>
      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>All Orders</h2>
          <hr />
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead className="table-light">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Address</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Order Created</th>
                  <th scope="col">Delivery Date</th>
                </tr>
              </thead>
              <tbody>
                {ordersList.map((order, index) => (
                  <tr key={order.idProduct}>
                    <th scope="row">{index + 1}</th>
                    <td scope="col">{order.organizationName}</td>

                    <td>
                      {order.productImage ? (
                        <img
                          src={order.productImage}
                          alt={order.Title}
                          style={{ width: "100px", height: "auto" }}
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td>{order.totalQuantity}</td>
                    <td>{order.organizationAddress}</td>
                    <td>{order.organizationEmail}</td>
                    <td>{order.organizationNumber}</td>
                    <td>{order.createdAt}</td>
                    <td>
                      {order.deliveryDate
                        ? order.deliveryDate
                        : "Not Yet Delivered"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export async function loader({ request, params }) {
  console.log("loader");

  const response = await axios.get("http://localhost:3000/admin/orders");
  console.log("loader");
  console.log(response);

  if (response.status !== 201) {
    throw new Error("unsuccessful company creation");
  }

  const formatResult = response.data.data.map((order) => {
    const date = new Date(order.createdAt);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });

    const formattedNumber = order.organizationNumber
      ? `${order.organizationNumber.slice(
          0,
          3
        )}-${order.organizationNumber.slice(
          3,
          6
        )}-${order.organizationNumber.slice(6)}`
      : null;

    return {
      ...order,
      createdAt: formattedDate,
      organizationNumber: formattedNumber,
    };
  });

  return formatResult;
}
