import pool from "../util/db.js";
import { validator } from "../middleware/common.js";

//  Get

export async function getSuppliers(req, res, next) {
  
  try {
    
     const [result, field] = await pool.query("SELECT * FROM `Supplier`");
     
      res.status(201).json({data: result});

  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function getSupplier(req, res, next) {
  
  try {

    const id =  req.params.id;
    console.log(id)
    
    console.log("supplier")

     const [result, field] = await pool.query("SELECT * FROM `Supplier` WHERE `idSupplier` = ?",[id]);
        console.log(result);
      res.status(201).json({data: result});

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
  const name = req.body.companyName;
  const address = req.body.companyAddress;
  const phone = req.body.companyPhone;
  const email = req.body.companyEmail;

  try {
   const [result, field] = await pool.query(
      "INSERT INTO `Supplier`(`companyName`,`companyEmail`,`companyAddress`,`companyPhone`) VALUES(?,?,?,?)",
      [name, email, address, phone]
    );

    res.status(201).json({ message: "successfully created" });

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
