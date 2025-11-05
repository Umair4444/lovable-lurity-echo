// src/layouts/Layout.jsx
import Navigation from "@/components/Navigation";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Navigation />
      <main>
        <Outlet /> {/* 👈 this is where child routes render */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
