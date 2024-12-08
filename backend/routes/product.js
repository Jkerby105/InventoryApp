import express from "express";
import {
  getProducts,
  postProduct,
  putProduct,
  deleteProduct,
} from "../controller/product.js";

const router = express.Router();

router.get("/products", [], getProducts);
router.post("/product", [], postProduct);
router.put("/product/:id", [], putProduct);
router.delete("/product/:id", [], deleteProduct);

export default router;
