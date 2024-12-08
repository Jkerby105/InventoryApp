import express from "express";
import { postCreateAccount, postLoginAccount } from "../controller/auth.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/create",
  [
    body("userName").trim().notEmpty(),
    body("lastName").trim().notEmpty(),
    body("phone").trim().notEmpty(),
    body("address").trim().notEmpty(),
    body("email").trim().isEmail(),
    body("password").trim().notEmpty(),
  ],
  postCreateAccount
);

router.post("/login", [], postLoginAccount);

export default router;
