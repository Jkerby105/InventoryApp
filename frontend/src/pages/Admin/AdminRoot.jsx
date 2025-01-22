import React from "react";
import { Outlet } from "react-router-dom";
import { AdminNav } from "../../components/AdminNav";
import { Footer } from "../../components/Footer";

export const AdminRoot = () => {
  return (
    <>
      <AdminNav />
      <Outlet />
    </>
  );
};
