import express from "express";
import {
  getCategories,
  getDeliveryDrivers,
  getOrders,
  getSuppliers,
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
} from "../controller/admin";
const router = express.Router();

router.get("/suppliers", getSuppliers);
router.get("/categories", getCategories);
router.get("/deliveryDrivers", getDeliveryDrivers);
router.get("/orders", getOrders);

router.post("/addSupplier", [], postSuppliers);
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
