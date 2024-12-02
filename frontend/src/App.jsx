import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// -------------------------------- \\
import { AccountRoot } from "./pages/Account/AccountRoot";
import { Login } from "./pages/Account/Login";
import { CreateAccount } from "./pages/Account/CreateAccount";
import { AboutUs } from "./pages/Account/AboutUs";
import { ForgetPassword } from "./pages/Account/ForgetPassword";
// -------------------------------- \\
import { AdminRoot } from "./pages/Admin/AdminRoot";
import { InventoryData } from "./pages/Company/InventoryData";
import { ViewProducts } from "./pages/Product/ViewProducts";
import { AddProduct } from "./pages/Product/AddProduct";
import { AddCategory } from "./pages/Category/AddCategory";
import { RegisterSupplier } from "./pages/Register/RegisterSupplier";
import { Register } from "./pages/Register/Register";
import { ViewOrders } from "./pages/Order/ViewOrders";
import { AssignOrder } from "./pages/Order/AssignOrder";
// -------------------------------- \\
import { UserRoot } from "./pages/User/UserRoot";
import { UserCart } from "./pages/User/UserCart";
import { UserCheckout } from "./pages/User/UserCheckout";
import { UserOrders } from "./pages/User/UserOrders";
import { UserDashBoard } from "./pages/User/UserDashBoard";
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
            path: "Products",
            element: <ViewProducts />,
          },
          {
            path: "product",
            element: <AddProduct />,
          },
          {
            path: "category",
            element: <AddCategory />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "registerSupplier",
            element: <RegisterSupplier />,
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
      {
        path: "dashBoard",
        element: <UserRoot />,
        children: [
          {
            index: true,
            element: <UserDashBoard />,
          },
          {
            path: "orders",
            element: <UserOrders/>
          },
          {
            path: "cart",
            element: <UserCart/>
          },
          {
            path: "checkout",
            element: <UserCheckout/>
          }
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
