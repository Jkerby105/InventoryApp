import React, { useState, useRef } from "react";
import axios from "axios";
import { redirect, useLoaderData, useNavigate, useSubmit } from "react-router-dom";
import styles from "../../styles/Admin/addProduct.module.css";


import Modal from "../../components/modal";

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
  const submit = useSubmit();
  const dialog = useRef();
  let navigate = useNavigate();
  const data = useLoaderData();
  const [suppliers, setSuppliers] = useState(data.data);
   const [supplierID, setSupplierID] = useState(null);


  function deleteSupplier() {
    // console.log("remove");
    const formData = new FormData();
    formData.append("supplierID", supplierID);
    submit(formData, { method: "DELETE" });
  }

  function handleDelete(id) {
    setSupplierID(id);
    dialog.current.open();
  }


  return (
    <>
      <Modal ref={dialog} removeItem={ deleteSupplier}/>

      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>All Suppliers</h2>
          <hr />
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead className="table-light">
                <tr>
                  <th scope="col">Company Name</th>
                  <th scope="col">Company Email</th>
                  <th scope="col">Company Address</th>
                  <th scope="col">Company Phone</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
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
                      <Button
                        className="btn btn-sm btn-primary"
                        onClick={() => {
                          navigate(
                            `/admin/AddSupplier/?update=true&supplier=${supplier.idSupplier}`
                          );
                        }}
                      >
                        Update
                      </Button>
                    </td>
                    <td>
                      {" "}
                      <Button
                        className="btn btn-sm btn-danger"
                        onClick={() =>  handleDelete(supplier.idSupplier)}
                      >
                        Delete
                      </Button>
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

export async function action({ request, params }) {
  const data = await request.formData();
  const supplierID = data.get("supplierID");
  console.log("here")
  console.log(supplierID)
  const response = await axios.delete("http://localhost:3000/admin/supplier/ " + supplierID);
 
  if (response.status !== 201) {
    throw new Error("unsuccessful company creation");
  }

  return redirect("/admin");

}

export async function loader({ request, params }) {
  console.log("first");

  const response = await axios.get("http://localhost:3000/admin/suppliers");
  // console.log(response);

  if (response.status !== 201) {
    throw new Error("unsuccessful company creation");
  }

  return response.data;
}
