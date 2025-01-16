import React, { useState, useRef, useEffect } from "react";
import Modal from "../../components/modal";

import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "../../styles/Admin/viewProducts.module.css";
import styles from "../../styles/forgetPassword.module.css";
import { useSubmit, redirect } from "react-router-dom";

import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";

export const AddCategory = () => {
  const submit = useSubmit();
  const dialog = useRef();

  const [categories, setCategory] = useState([]);
  const [categoryUpdate, setCategoryUpdate] = useState(false);
  const [categoryID, setCategoryID] = useState(null);
  const category = useRef();
  useEffect(() => {
    async function getSupplier() {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/categories"
        );

        setCategory(response.data.data);
      } catch (error) {
        throw new Error("Could not retrieve company");
      }
    }

    getSupplier();
  }, []);

  function categoryCreation(e) {
    e.preventDefault();
    const formData = new FormData();
    if (categoryID !== null) {
      formData.append("categoryID", categoryID);
    }
    formData.append("category", category.current.value);
    submit(formData, { method: "POST" });
  }

  function deleteCategory(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("categoryID", categoryID);
    submit(formData, { method: "DELETE" });
  }

  function setUpdate(id) {
    setCategoryID(id);
    setCategoryUpdate(true);
  }

  function handleDelete() {
    dialog.current.open();
  }

  return (
    <>
      <Modal ref={dialog} removeItem={deleteCategory}/>

      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>All Category</h2>
          <hr />
          <div className="table-responsive">
            <table className="table table-hover table-striped">
              <thead className="table-light">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.idCategory}>
                    <td>{category.Title}</td>
                    <td>
                      <Button
                        className="btn btn-sm btn-primary"
                        onClick={() => {
                          setUpdate(category.idCategory);
                        }}
                      >
                        Update
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="btn btn-sm btn-danger"
                        onClick={() => {
                          setCategoryID(category.idCategory);
                          handleDelete();
                        }}
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

      <Card className={styles.loginCard}>
        <Card.Body>
          <h2 className={styles.loginHeader}>
            {!categoryUpdate ? "Add Category " : "Update Category"}
          </h2>
          <Form onSubmit={categoryCreation}>
            {!categoryUpdate ? (
              ""
            ) : (
              <Form.Group controlId="email" className={styles.formGroup}>
                <Form.Label>ID number</Form.Label>
                <Form.Control
                  type="number"
                  className={styles.formControl}
                  defaultValue={categoryID}
                />
              </Form.Group>
            )}
            <Form.Group controlId="email" className={styles.formGroup}>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                className={styles.formControl}
                ref={category}
              />
            </Form.Group>
            <Button type="submit" className={styles.loginButton}>
              {!categoryUpdate ? "Submit" : "Update"}
            </Button>
          </Form>
          {!categoryUpdate ? (
            ""
          ) : (
            <Button
              type="submit"
              className={styles.loginButton}
              onClick={() => {
                setCategoryUpdate(false);
              }}
            >
              Cancel
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export async function action({ request, params }) {
  const data = await request.formData();
  const categoryID = data.get("categoryID");
  const category = data.get("category");

  // console.log("submit");
  console.log(data.get("categoryID"));
  console.log(data.get("category"));
  // console.log("submit");

  const categoryBody = {
    category: data.get("category"),
    categoryID: data.get("categoryID"),
  };

  let response;

  if(category === null){
    console.log(" yes null")
    response = await axios.delete(
      "http://localhost:3000/admin/category/ " + categoryID,
      categoryBody
    );
  }else if (categoryID === null) {
    response = await axios.post(
      "http://localhost:3000/admin/addCategory/",
      categoryBody
    );
  } else {
    response = await axios.put(
      "http://localhost:3000/admin/updateCategory/ " + categoryID,
      categoryBody
    );
  }

  if (response.status !== 201) {
    throw new Error("unsuccessful company creation");
  }

  return redirect("/admin");
}
