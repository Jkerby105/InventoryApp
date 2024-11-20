import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {AboutUs} from "./pages/Account/AboutUs";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <AboutUs />,
      },
    ],
    {
      future: {
        v7_fetcherPersist: true, // Enable the fetcher persistence behavior
      },
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
