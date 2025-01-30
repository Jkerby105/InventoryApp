import pool from "../util/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validator } from "../middleware/common.js";
import cookie from "cookie";

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


     await pool.query(
      "INSERT INTO `Admin`(`Email`, `firstName`, `lastName`, `Password`, `Phone`, `Role`, `Address`) VALUES (?, ?, ?, ?, ?, ?, ?)",
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
    const email = req.body.email;
    const password = req.body.password;

    const [adminResult] = await pool.query(
      "SELECT id, Password FROM Admin WHERE Email = ?",
      [email]
    );

    const compareValue = await bcrypt.compare(
      password,
      adminResult[0].Password
    );

    if (compareValue) {
      const ID = adminResult[0].id;

      const token = jwt.sign(
        {
          email: email,
          adminID: ID.toString(),
        },
        process.env.SecretPassword,
        { expiresIn: "1h" }
      );

      res.status(200).json({token: token, message: "successfully login" });
      

    }
  } catch (error) {
    error.statusCode = 442;
    error.message = "server error";
    throw error;
  }
}

