import pool from "../util/db.js";
import { validator } from "../middleware/common.js";

//  Get

export async function getSuppliers(req, res, next) {

  try {
    // ...
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function getCategories(req, res, next) {

  try {
    // ...
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function getDeliveryDrivers(req, res, next) {

  try {
    // ...
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function getOrders(req, res, next) {

  try {
    // ...
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

// Post

export async function postSuppliers(req, res, next) {
  validator(req);

  try {
    // ...
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function postCategories(req, res, next) {
  validator(req);

  try {
    // ...
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function postDeliveryDrivers(req, res, next) {
  validator(req);

  try {
    // ...
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

// Put

export async function putSuppliers(req, res, next) {
  validator(req);

  try {
    // ...
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function putCategories(req, res, next) {
  validator(req);

  try {
    // ...
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function putDeliveryDrivers(req, res, next) {
  validator(req);

  try {
    // ...
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function putOrders(req, res, next) {
  validator(req);

  try {
    // ...
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

// Delete

export async function deleteSuppliers(req, res, next) {

  try {
    // ...
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function deleteCategories(req, res, next) {

  try {
    // ...
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function deleteDeliveryDrivers(req, res, next) {

  try {
    // ...
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}
