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
    res.status(201).json({ data: result });
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function getCategories(req, res, next) {
  try {
    const [resultCategories] = await pool.query(`
      SELECT 
        c.idCategory AS CategoryID, 
        c.Title AS CategoryTitle
      FROM 
        Category c
    `);


    const [resultProducts, fields] = await pool.query(`
      SELECT 
        p.Title AS ProductTitle,
        p.idProduct AS ProductID,
        p.productQuantity AS ProductQuantity,
        p.subCategory As subCategoryID
      FROM 
         Product p
    `);


    res.status(201).json({ categories: resultCategories, products: resultProducts });
  } catch (error) {
    error.statusCode = 422;
    error.message = "Server error";
    throw error;
  }
}


export async function getOrders(req, res, next) {
  try {
    const [result, fields] = await pool.query(`
      SELECT 
        Orders.*, 
        Product.productImage
      FROM 
        Orders
      JOIN 
        Product 
      ON 
        Orders.Product_productID = Product.idProduct
    `);

    // Format the result to include the base64 image
    const formattedResult = result.map((order) => ({
      ...order,
      productImage: order.productImage
        ? `data:image/png;base64,${order.productImage.toString("base64")}`
        : null,
    }));

    res.status(201).json({ data: formattedResult });
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

    const [result] = await pool.query(
      "SELECT * FROM `Product` WHERE `idProduct` = ?",
      [productID]
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

export async function getInventoryData(req, res, next) {
  try {
    const [productCountResult] = await pool.query(
      "SELECT COUNT(*) AS count FROM `Product`"
    );

    const [orderCountResult] = await pool.query(
      "SELECT COUNT(*) AS count FROM `ORDERS`"
    );

    const [supplierCountResult] = await pool.query(
      "SELECT COUNT(*) AS count FROM `Supplier`"
    );

    const [categoryCountResult] = await pool.query(
      "SELECT COUNT(*) AS count FROM `Category`"
    );


    const [result] = await pool.query(`
      SELECT 
          p.Title AS ProductName,
          SUM(o.totalQuantity) AS TotalSold, p.idProduct AS productID
      FROM 
          ORDERS o
      INNER JOIN 
          Product p ON o.Product_productID = p.idProduct
      GROUP BY 
          p.idProduct
      ORDER BY 
          TotalSold DESC
      LIMIT 5
    `);

    res.status(201).json({
      productCount: productCountResult,
      orderCount: orderCountResult,
      supplierCount: supplierCountResult,
      categoryCount: categoryCountResult,
      highestOrderProducts: result,
    });
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
      await pool.query(
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
  validator(req);

  try {
    const Title = req.body.Title;
    const Description = req.body.Description;
    const productImage = req.file.buffer;
    const productQuantity = req.body.suppliedQuantity;
    const Supplier = req.body.Supplier;
    const Category = req.body.Category;

    await pool.query(
      "INSERT INTO `Product` (`Title`, `Description`, `productImage`, `productQuantity`, `Supplier_idSupplier`, `subCategory`) VALUES (?, ?, ?, ?, ?, ?)",
      [
        Title,
        Description,
        productImage,
        productQuantity,
        Supplier,
        Category,
      ]
    );

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
    const organizationName = req.body.organizationName;
    const organizationEmail = req.body.organizationEmail;
    const organizationAddress = req.body.organizationAddress;
    const organizationNumber = req.body.organizationNumber;
    const productID = req.body.selectedProduct;
    const productQuantity = req.body.productAmount;
  

    await pool.query(
      "INSERT INTO `Orders` (`deliveryDate`,`totalQuantity`,`organizationName`, `organizationAddress`, `organizationEmail`, `organizationNumber`, `Product_productID`) VALUES(?,?,?,?,?,?,?)",
      [
        null,
        productQuantity,
        organizationName,
        organizationAddress,
        organizationEmail,
        organizationNumber,
        productID,
      ]
    );

    await pool.query(
      "UPDATE `Product` SET productQuantity = productQuantity - ? WHERE idProduct = ?", 
      [productQuantity, productID]
    );
    

    // Respond with a success message
    res.status(201).json({ message: "Order successfully created" });
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}

export async function postHighestOrdered(req, res, next) {

  const startDate = req.body.startDateTime;
  const endDate = req.body.endDateTime;

  try {
    const [result] = await pool.query(
      `
      SELECT 
          o.organizationName AS Organization,
          o.totalQuantity AS TotalSold, 
          o.createdAt AS OrderDate,
          o.idOrders AS OrderID,
          p.Title AS ProductName
      FROM 
          ORDERS o
      INNER JOIN 
          Product p ON o.Product_productID = p.idProduct
      WHERE 
          o.createdAt BETWEEN ? AND ?
    `,
      [startDate, endDate]
    );

    res.status(201).json({
      orderSearchList: result,
    });
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
  validator(req);

  const productID = req.params.id;

  try {
    const Title = req.body.Title;
    const Description = req.body.Description;
    const productQuantity = req.body.suppliedQuantity;
    let productImage = null;
    if (req.file) {
      productImage = req.file.buffer;
    }
    const Supplier = req.body.Supplier;
    const Category = req.body.Category;

    if (productImage) {
      await pool.query(
        "UPDATE `Product` SET `Title` = ?, `Description` = ?, `productImage` = ?, `productQuantity` = ?, `Supplier_idSupplier` = ?, `subCategory` = ? WHERE `idProduct` = ?",
        [
          Title,
          Description,
          productImage,
          productQuantity,
          Supplier,
          Category,
          productID,
        ]
      );
    } else {
      await pool.query(
        "UPDATE `Product` SET `Title` = ?, `Description` = ?, `productQuantity` = ?, `Supplier_idSupplier` = ?, `subCategory` = ? WHERE `idProduct` = ?",
        [
          Title,
          Description,
          productQuantity,
          Supplier,
          Category,
          productID,
        ]
      );
    }

    res.status(201).json({ message: "Product successfully updated" });
  } catch (error) {
    // Handle errors
    error.statusCode = 422;
    error.message = "Server error";
    next(error); // Pass error to the next middleware
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

    res.status(201).json({ message: "Successfully Delete" });
  } catch (error) {
    error.statusCode = 422;
    error.message = "server error";
    throw error;
  }
}
