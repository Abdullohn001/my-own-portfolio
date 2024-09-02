import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <section className="w-full">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </section>
  );
}

export default MainLayout;
