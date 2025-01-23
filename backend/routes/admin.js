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
  getInventoryData,
  postCategories,
  postSuppliers,
  postProduct,
  postHighestOrdered,
  putCategories,
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
router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.get("/inventory", getInventoryData);

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
    body("Title").trim().notEmpty().isString(),
    body("Description").trim().notEmpty().isString(),
    body("suppliedQuantity").trim().notEmpty().isNumeric(),
    body("Supplier").trim().notEmpty().isNumeric(),
    body("Category").trim().notEmpty().isNumeric(),
  ],
  postProduct
);
router.post(
  "/addOrder",
  [
    body("organizationName").trim().notEmpty().isString(),
    body("organizationEmail").trim().notEmpty().isEmail(),
    body("organizationAddress").trim().notEmpty().isString(),
    body("organizationNumber").trim().notEmpty().isNumeric(),
    body("selectedProduct").trim().notEmpty().isNumeric(),
    body("productAmount").trim().notEmpty().isNumeric(),
  ],
  postOrder
);
router.post("/highestOrdered", postHighestOrdered);

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
router.put(
  "/updateProduct/:id",
  [
    body("Title").trim().notEmpty().isString(),
    body("Description").trim().notEmpty().isString(),
    body("suppliedQuantity").trim().notEmpty().isNumeric(),
    body("Supplier").trim().notEmpty().isNumeric(),
    body("Category").trim().notEmpty().isNumeric(),
  ],
  putProduct
);

// DELETE

router.delete("/supplier/:id", deleteSuppliers);
router.delete("/category/:id", deleteCategories);
router.delete("/product/:id", deleteProduct);

// router.delete("/order",[]);

export default router;
