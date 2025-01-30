import express from "express";
import { postCreateAccount, postLoginAccount } from "../controller/auth.js";
import { checkAuthMiddlewareTwo} from "../util/auth.js";
import { body } from "express-validator";

const router = express.Router();

router.post("/validate",checkAuthMiddlewareTwo);
router.post(
  "/create",
  [
    body("userName").trim().notEmpty(),
    body("lastName").trim().notEmpty(),
    body("phone").trim().notEmpty(),
    body("address").trim().notEmpty(),
    body("email").trim().isEmail(),
    body("password").trim().notEmpty().isLength({min: 10}),
  ],
  postCreateAccount
);

router.post("/login", [], postLoginAccount);



export default router ;
