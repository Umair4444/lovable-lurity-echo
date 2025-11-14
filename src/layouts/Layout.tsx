import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";

const Layout = () => {
  return (
    <>
  <Header/>
      <main>
        <Outlet /> {/* 👈 this is where child routes render */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
