import bodyParser from "body-parser";
import cors from "cors"
import { validationResult } from "express-validator";

export const commonMiddleWare = [
    bodyParser.json(),
    cors(),
    (req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
        res.setHeader("Access-Control-Allow-Headers", "Content,Authorization,Content-Type");
        next();
      },
];

export const validator = (req) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Validation failed");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

}