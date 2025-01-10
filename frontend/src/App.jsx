import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// -------------------------------- \\
import { AccountRoot } from "./pages/Account/AccountRoot";
import { Login } from "./pages/Account/Login";
import { CreateAccount, action as createAccountAction } from "./pages/Account/CreateAccount";
import { AboutUs } from "./pages/Account/AboutUs";
import { ForgetPassword } from "./pages/Account/ForgetPassword";
// -------------------------------- \\
import { AdminRoot } from "./pages/Admin/AdminRoot";
import { InventoryData } from "./pages/Company/InventoryData";
import { ViewProducts } from "./pages/Product/ViewProducts";
import { AddProduct } from "./pages/Product/AddProduct";
import { AddCategory, action as categoryAction } from "./pages/Category/AddCategory";
import { RegisterSupplier, action as companySupplierAction } from "./pages/Register/RegisterSupplier";
import {ViewSuppliers, loader as suppliersLoader, action as suppliersAction} from "./pages/Register/ViewSuppliers";
import { ViewOrders } from "./pages/Order/ViewOrders";
import { AssignOrder } from "./pages/Order/AssignOrder";
// -------------------------------- \\

import {SomeError} from "./pages/Error/SomeError"

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        errorElement: <SomeError/>,
        element: <AccountRoot />,
      },
      {
        errorElement: <SomeError/>,
        path: "Login",
        element: <AccountRoot />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "CreateAccount", // Relative path
            element: <CreateAccount />,
            action: createAccountAction
          },
          {
            path: "ForgotPassword", // Relative path
            element: <ForgetPassword />,
          },
          {
            path: "AboutUs", // Relative path
            element: <AboutUs />,
          },
        ],
      },
      {
        path: "Admin",
        element: <AdminRoot />,
        children: [
          {
            index: true,
            element: <InventoryData />,
          },
          {
            path: "AddProduct",
            element: <AddProduct />,
          },
          {
            path: "ViewProducts",
            element: <ViewProducts />,
          },
          {
            path: "AddCategory",
            element: <AddCategory />,
            action: categoryAction
          },
          {
            path: "ViewCategories",
            element: <AddCategory />,
           
          },
          {
            path: "AddSupplier",
            element: <RegisterSupplier />,
            action: companySupplierAction
          },
          {
            path: "ViewSuppliers",
            element: <ViewSuppliers />,
            loader: suppliersLoader,
            action: suppliersAction,
          },
          {
            path: "Orders",
            element: <ViewOrders />,
          },
          {
            path: "assignOrder",
            element: <AssignOrder />,
          },
        ],
      },
    ],
    {
      future: {
        v7_fetcherPersist: true,
      },
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
