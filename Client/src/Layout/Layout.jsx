import { Outlet, useLocation } from "react-router-dom";
import {
  Nav,
  Footer,
  ScrollToTop,
} from "../Components/index";
import AdminNav from "../Admin/AdminNav";

const Layout = () => {
  const { pathname } = useLocation();

  const isAdminRoute = pathname.startsWith("/admin");
  const isAdminLoginRoute = pathname === "/admin/login";

  const showAdminNav = isAdminRoute && !isAdminLoginRoute;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />

      {/* Navigation */}
      {showAdminNav ? <AdminNav /> : !isAdminLoginRoute && <Nav />}

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Don't show footer on admin pages */}
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default Layout;