import React, { useState } from "react";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import styles from "../../styles/Admin/addProduct.module.css";

import {
  Form,
  Button,
  Card,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Col,
  Row,
} from "react-bootstrap";

export const ViewSuppliers = () => {

  let navigate = useNavigate();
  const data = useLoaderData();
  const [suppliers, setSuppliers] = useState(data.data);


  function updateSupplier(id) {

    console.log(id);
  }

  function deleteSupplier() {}





  return (
    <>
      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>All Suppliers</h2>
          <hr />
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead className="table-light">
                <tr>
                  <th scope="col">Purchase Price</th>
                  <th scope="col">Selling Price</th>
                  <th scope="col">Profit/Loss</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {suppliers.map((supplier) => (
                  <tr key={supplier.idSupplier}>
                    <td>{supplier.companyName}</td>
                    <td>{supplier.companyEmail}</td>
                    <td>{supplier.companyAddress}</td>
                    <td>{supplier.companyPhone}</td>
                    <td>

                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() =>{
                          navigate(`/admin/AddSupplier/?update=true&supplier=${supplier.idSupplier}`);
                        }}
                      >
                        Update
                      </button>

                      <button className="btn btn-sm btn-danger" onClick={() => deleteSupplier(supplier.idSupplier)}>Delete</button>
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

export async function action({ request, params }) {}

export async function loader({ request, params }) {
  console.log("first");

  const response = await axios.get("http://localhost:3000/admin/suppliers");
  // console.log(response);

  if (response.status !== 201) {
    throw new Error("unsuccessful company creation");
  }

  return response.data;
}
