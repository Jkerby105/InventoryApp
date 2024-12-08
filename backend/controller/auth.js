import pool from "../util/db.js";
import bcrypt from "bcryptjs";
import { validator } from "../middleware/common.js";

export async function postCreateAccount(req, res, next) {
  validator(req);

  try {
    const userName = req.body.userName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;
    const address = req.body.address;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    const hashedPw = await bcrypt.hash(password, 12);

    const [result, field] = await pool.query(
      "INSERT INTO `User`(`Email`, `firstName`, `lastName`, `Password`, `Phone`, `Role`, `Address`) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [email, userName, lastName, hashedPw, phone, role, address]
    );

    res.status(201).json({ message: "successfully created" });
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function postLoginAccount(req, res, next) {
  validator(req);

  try {
    // ...
  } catch (error) {
    error.statusCode = 442;
    error.message = "server error";
    throw error;
  }
}
