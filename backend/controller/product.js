import pool from "../util/db.js";
import { validator } from "../middleware/common.js";

export async function getProducts(req,res,next){

    try {
        // ...
      } catch (error) {
        error.statusCode = 442;
        error.message = "server error";
        throw error;
      }

}


export async function postProduct(req,res,next){
    validator(req);

    try {
        // ...
      } catch (error) {
        error.statusCode = 442;
        error.message = "server error";
        throw error;
      }

}

export async function putProduct(req,res,next){
    validator(req);

    try {
        // ...
      } catch (error) {
        error.statusCode = 442;
        error.message = "server error";
        throw error;
      }

}

export async function deleteProduct(req,res,next){

    try {
        // ...
      } catch (error) {
        error.statusCode = 442;
        error.message = "server error";
        throw error;
      }

}