import express from "express";
import { body } from "express-validator";

import {
  getCategories,
  getOrders,
  getSuppliers,
  getSupplier,
  getSupplierCategories,
  getProducts,
  getProduct,
  postCategories,
  postSuppliers,
  postProduct,
  putCategories,
  putOrders,
  putSuppliers,
  putProduct,
  deleteCategories,
  deleteSuppliers,
  deleteProduct,
  postOrder,
} from "../controller/admin.js";
const router = express.Router();

// GET

router.get("/suppliers", getSuppliers);
router.get("/supplier/:id", getSupplier);
router.get("/categories", getCategories);
router.get("/category", getCategories);
router.get("/orders", getOrders);
router.get("/SuppliersCategories", getSupplierCategories);
router.get("/products",getProducts);
router.get("/product/:id",getProduct);



// POST

router.post(
  "/addSupplier",
  [
    body("companyName").trim().notEmpty(),
    body("companyAddress").trim().notEmpty(),
    body("companyPhone").trim().notEmpty(),
    body("companyEmail").trim().notEmpty().isEmail(),
  ],
  postSuppliers
);
router.post(
  "/addCategory",
  [body("category").trim().notEmpty()],
  postCategories
);
router.post(
  "/addProduct",
  [
    body("Title").trim().notEmpty().isAlpha(),
    body("Description").trim().notEmpty().isAlpha(),
    body("suppliedQuantity").trim().notEmpty().isNumeric(),
    body("Supplier").trim().notEmpty().isAlpha(),
    body("Category").trim().notEmpty().isAlpha(),
  ],
  postProduct
);
router.post("/addOrder", [], postOrder);

// PUT

router.put(
  "/updateSupplier/:id",
  [
    body("companyName").trim().notEmpty(),
    body("companyAddress").trim().notEmpty(),
    body("companyPhone").trim().notEmpty(),
    body("companyEmail").trim().notEmpty().isEmail(),
  ],
  putSuppliers
);
router.put(
  "/updateCategory/:id",
  [
    body("category").trim().notEmpty(),
    body("categoryID").trim().notEmpty().isNumeric(),
  ],
  putCategories
);
router.put("/updateProduct/:id", [], putProduct);

// DELETE

router.delete("/supplier/:id", deleteSuppliers);
router.delete("/category/:id", deleteCategories);
router.delete("/product/:id", deleteProduct);

// router.delete("/order",[]);

export default router;
