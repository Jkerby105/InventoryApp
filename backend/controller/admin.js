import pool from "../util/db.js";
import { validator } from "../middleware/common.js";
import e from "express";

//  Get

export async function getSuppliers(req, res, next) {
  try {
    const [result, field] = await pool.query("SELECT * FROM `Supplier`");

    res.status(201).json({ data: result });
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function getSupplier(req, res, next) {
  try {
    const id = req.params.id;

    const [result, field] = await pool.query(
      "SELECT * FROM `Supplier` WHERE `idSupplier` = ?",
      [id]
    );
    console.log(result);
    res.status(201).json({ data: result });
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function getCategories(req, res, next) {
  try {
    const [result, fields] = await pool.query("SELECT * FROM CATEGORY");

    console.log(result);
    res.status(201).json({ data: result });
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

export async function getSupplierCategories(req, res, next) {
  const [categoryResult, categoryFields] = await pool.query(
    "SELECT * FROM CATEGORY"
  );

  const [supplierResult, supplierFields] = await pool.query(
    "SELECT * FROM Supplier"
  );

  res.status(201).json({ category: categoryResult, supplier: supplierResult });

  try {
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function getProducts(req, res, next) {


  try {

    const [result, field] = await pool.query("SELECT * FROM `Product`");


    const formattedResult = result.map((product) => ({
      ...product,
      productImage: product.productImage
        ? `data:image/png;base64,${product.productImage.toString("base64")}`
        : null,
    }));

    res.status(201).json({ data: formattedResult });
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function getProduct(req, res, next) {
  try {

    const productID = req.params.id;
   
    const [result, field] = await pool.query(
      "SELECT * FROM `Product` WHERE `idProduct` = ?",[productID]
    );


    if (result.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    const product = result[0];

    const formattedProduct = {
      ...product,
      productImage: product.productImage
        ? `data:image/png;base64,${product.productImage.toString("base64")}`
        : null,
    };


    res.status(201).json({ data: formattedProduct });
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

  const category = req.body.category;

  try {
    const [result, field] = await pool.query(
      "INSERT INTO `Category` (`Title`) VALUES(?)",
      [category]
    );

    res.status(201).json({ message: "successfully created" });
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function postProduct(req, res, next) {
  console.log("hello here ");

  try {
    // Validate the incoming request data
    validator(req);

    // Extract fields from the request body
    const Title = req.body.Title;
    const Description = req.body.Description;
    const productImage = req.file.buffer; // Assuming the image is in the request
    console.log(productImage);
    // const base64String = productImage.toString('base64');
    // console.log(base64String)
    const productQuantity = req.body.suppliedQuantity;
    const Supplier = req.body.Supplier;
    const Category = req.body.Category;

    // Query to get the Supplier and Category IDs based on the provided names
    const supplierId = await pool.query(
      "SELECT idSupplier FROM Supplier WHERE companyName = ?",
      [Supplier]
    );
    const categoryID = await pool.query(
      "SELECT idCategory FROM Category WHERE Title = ?",
      [Category]
    );

    // Insert the new product, relying on the default values for createdAt and updatedAt
    const response = await pool.query(
      "INSERT INTO `Product` (`Title`, `Description`, `productImage`, `productQuantity`, `Supplier_idSupplier`, `subCategory`) VALUES (?, ?, ?, ?, ?, ?)",
      [
        Title,
        Description,
        productImage,
        productQuantity,
        supplierId[0][0].idSupplier,
        categoryID[0][0].idCategory,
      ]
    );

    console.log(response);
    // Respond with a success message
    res.status(201).json({ message: "Product successfully created" });
  } catch (error) {
    // Handle errors
    error.statusCode = 422;
    error.message = "Server error";
    next(error); // Pass error to the next middleware
  }
}

export async function postOrder(req, res, next) {
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
  const supplierId = req.params.id;
  const name = req.body.companyName;
  const address = req.body.companyAddress;
  const phone = req.body.companyPhone;
  const email = req.body.companyEmail;

  try {
    const [result, field] = await pool.query(
      "UPDATE `Supplier` SET companyName = ?, companyEmail = ?, companyAddress = ?, companyPhone = ? WHERE idSupplier = ?",
      [name, email, address, phone, supplierId]
    );

    res.status(201).json({ message: "updated successfully" });
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function putCategories(req, res, next) {
  validator(req);

  const category = req.body.category;
  const categoryID = req.params.id;

  try {
    await pool.query("UPDATE `Category` SET TITLE = ? WHERE idCategory = ?", [
      category,
      categoryID,
    ]);

    res.status(201).json({ message: "successfully update" });
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function putProduct(req, res, next) {
  console.log("hello here ");

  const productID = req.params.id;

  try {
    validator(req);

    const Title = req.body.Title;
    const Description = req.body.Description;
    const productImage = req.file.buffer;
    const productQuantity = req.body.suppliedQuantity;
    const Supplier = req.body.Supplier;
    const Category = req.body.Category;

    // Query to get the Supplier and Category IDs based on the provided names
    const supplierId = await pool.query(
      "SELECT idSupplier FROM Supplier WHERE companyName = ?",
      [Supplier]
    );
    const categoryID = await pool.query(
      "SELECT idCategory FROM Category WHERE Title = ?",
      [Category]
    );

    console.log(Title);
    console.log(Description)
    console.log(productQuantity)
    console.log(supplierId)
    console.log(categoryID)
    console.log(productImage)

    // Insert the new product, relying on the default values for createdAt and updatedAt
        await pool.query(
      "UPDATE `Product` SET `Title` = ?, `Description` = ?, `productImage` = ?, `productQuantity` = ?, `Supplier_idSupplier` = ?, `subCategory` = ? WHERE `idProduct` = ?",
      [
        Title,
        Description,
        productImage,
        productQuantity,
        supplierId[0][0].idSupplier,
        categoryID[0][0].idCategory,
        productID, // This is the condition to update the specific product
      ]
    );
    
    res.status(201).json({ message: "Product successfully updated" });
  } catch (error) {
    // Handle errors
    error.statusCode = 422;
    error.message = "Server error";
    next(error); // Pass error to the next middleware
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
  const supplierId = req.params.id;
  try {
    await pool.query("DELETE FROM `Supplier` WHERE idSupplier = ?", [
      supplierId,
    ]);

    res.status(201).json({ message: "Successfully Delete" });
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function deleteCategories(req, res, next) {
  const supplierId = req.params.id;

  try {
    await pool.query("DELETE FROM `Category` WHERE idCategory = ?", [
      categoryID,
    ]);

    res.status(201).json({ message: "Successfully Delete" });
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function deleteProduct(req, res, next) {
  const productID = req.params.id;
  try {
    await pool.query("DELETE FROM `Product` WHERE idProduct = ?", [productID]);

    console.log("product Delete");
    res.status(201).json({ message: "Successfully Delete" });
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}
