import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Admin/viewProducts.module.css";
import {
  Card,
} from "react-bootstrap";

export const ViewProducts = () => {
  return (
    <>
      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>Add Products</h2>
          <hr />
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Category</th>
                  <th scope="col">Supplier</th>
                  <th scope="col">Available Quantity</th>
                  <th scope="col">Supplied Quantity</th>
                  <th scope="col">Purchase Price</th>
                  <th scope="col">Selling Price</th>
                  <th scope="col">Profit/Loss</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>image</td>
                  <td>Product Name</td>
                  <td>Short description of the product.</td>
                  <td>Category Name</td>
                  <td>Supplier Name</td>
                  <td>120</td>
                  <td>200</td>
                  <td>$50.00</td>
                  <td>$75.00</td>
                  <td>$25.00</td>
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary">Update</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
