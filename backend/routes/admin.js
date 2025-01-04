import express from "express";
import { body } from "express-validator";
import {
  getCategories,
  getDeliveryDrivers,
  getOrders,
  getSuppliers,
  getSupplier,
  postCategories,
  postDeliveryDrivers,
  postSuppliers,
  putCategories,
  putDeliveryDrivers,
  putOrders,
  putSuppliers,
  deleteCategories,
  deleteDeliveryDrivers,
  deleteSuppliers,
} from "../controller/admin.js";
const router = express.Router();

router.get("/suppliers", getSuppliers);
router.get("/supplier/:id", getSupplier);

router.get("/categories", getCategories);
router.get("/category", getCategories);

router.get("/deliveryDrivers", getDeliveryDrivers);
router.get("/orders", getOrders);

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
router.post("/addCategory", [], postCategories);
router.post("/addDeliveryDriver", [], postDeliveryDrivers);

router.put("/updateSupplier/:id", [], putSuppliers);
router.put("/updateCategory/:id", [], putCategories);
router.put("/updateDeliveryDriver/:id", [], putDeliveryDrivers);
router.put("/updateOrder/:id", [], putOrders);

router.delete("/supplier/:id", deleteSuppliers);
router.delete("/category/:id", deleteCategories);
router.delete("/deliveryDriver/:id", deleteDeliveryDrivers);
// router.delete("/order",[]);

export default router;
