import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// -------------------------------- \\
import { AccountRoot } from "./pages/Account/AccountRoot";
import { Login } from "./pages/Account/Login";
import { CreateAccount, action as createAccountAction } from "./pages/Account/CreateAccount";
// -------------------------------- \\
import { AdminRoot } from "./pages/Admin/AdminRoot";
import { InventoryData, loader as dataLoader, action as dataAction } from "./pages/Company/InventoryData";
import { ViewProducts, loader as viewProductLoader, action as productRemoveAction } from "./pages/Product/ViewProducts";
import { AddProduct, loader as productsLoader, action as productAction } from "./pages/Product/AddProduct";
import { AddCategory, action as categoryAction } from "./pages/Category/AddCategory";
import { RegisterSupplier } from "./pages/Register/RegisterSupplier";
import {ViewSuppliers, loader as suppliersLoader, action as suppliersAction} from "./pages/Register/ViewSuppliers";
import { ViewOrders, loader as ordersLoader } from "./pages/Order/ViewOrders";
import { AssignOrder, loader as productLoader } from "./pages/Order/AssignOrder";
// -------------------------------- \\

import {SomeError} from "./pages/Error/SomeError"

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        errorElement: <SomeError/>,
        element: <Login />,
      },
      {
        errorElement: <SomeError/>,
        path: ("Login"),
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
        ],
      },
      {
        path: "Admin",
        element: <AdminRoot />,
        children: [
          {
            index: true,
            element: <InventoryData />,
            loader: dataLoader,
            // action:dataAction
          },
          {
            path: "AddProduct",
            element: <AddProduct />,
            loader: productsLoader,
            action: productAction
          },
          {
            path: "ViewProducts",
            element: <ViewProducts />,
            loader: viewProductLoader,
            action: productRemoveAction
          },
          {
            path: "AddCategory",
            element: <AddCategory />,
            action: categoryAction
          },
          {
            path: "AddSupplier",
            element: <RegisterSupplier />,
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
            loader: ordersLoader
          },
          {
            path: "assignOrder",
            element: <AssignOrder />,
            loader: productLoader
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
