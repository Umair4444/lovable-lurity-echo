import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  // Check if current path is /portal
  const isPortalPage = location.pathname === "/portal";

  return (
    <>
      {!isPortalPage && <Header />}
      <main>
        {/* Add top padding only if header is shown */}
        <Outlet />
      </main>
      {!isPortalPage && <Footer />}
    </>
  );
};

export default Layout;
