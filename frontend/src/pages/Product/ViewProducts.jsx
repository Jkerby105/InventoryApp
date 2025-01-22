import React, { useRef, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Admin/viewStyles.module.css";
import { Card, Button } from "react-bootstrap";
import Modal from "../../components/modal";
import axios from "axios";
import {
  redirect,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "react-router-dom";
Modal;

export const ViewProducts = () => {
  const submit = useSubmit();
  const navigate = useNavigate();
  const dialog = useRef();
  const products = useLoaderData().data;
  const [productID, setProductID] = useState(null);

  function deleteProduct(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("productID", productID);
    submit(formData, { method: "DELETE" });
  }

  function handleDelete(id) {
    setProductID(id);
    dialog.current.open();
  }

  return (
    <>
      <Modal ref={dialog} removeItem={deleteProduct} />
      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>All Products</h2>
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
                  <th scope="col">Status</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.idProduct}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      {product.productImage ? (
                        <img
                          src={product.productImage}
                          alt={product.Title}
                          style={{ width: "100px", height: "auto" }}
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td>{product.Title}</td>
                    <td>{product.Description}</td>
                    <td>{product.subCategory}</td>
                    <td>{product.Supplier_idSupplier}</td>
                    <td>{product.productQuantity}</td>
                    <td>
                      <span
                        className={`badge bg-${
                          product.productQuantity ? "success" : "danger"
                        }`}
                      >
                        {product.productQuantity ? "Available" : "Unavailable"}
                      </span>
                    </td>
                    <td>
                      <Button
                        className="btn btn-sm btn-primary"
                        onClick={() => {
                          navigate(
                            `/admin/AddProduct/?update=true&product=${product.idProduct}`
                          );
                        }}
                      >
                        Update
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(product.idProduct)}
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
  const productID = data.get("productID");
  const response = await axios.delete(
    "http://localhost:3000/admin/product/ " + productID
  );

  if (response.status !== 201) {
    throw new Error("unsuccessful company creation");
  }

  return redirect("/admin");
}

export async function loader({ request, params }) {
  const response = await axios.get("http://localhost:3000/admin/products");
  if (response.status !== 201) {
    throw new Error("unsuccessful company creation");
  }

  return response.data;
}
