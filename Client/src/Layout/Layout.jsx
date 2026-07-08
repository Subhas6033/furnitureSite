import { Outlet } from "react-router-dom";
import { Nav, Footer, ScrollToTop } from "../Components/index";

/**
 * Layout Component
 *
 * Main layout wrapper that provides consistent structure across all pages.
 * Includes the navigation bar, main content area, and footer.
 *
 * The Outlet component renders the matched child route's element,
 * allowing for nested routing within this layout.
 *
 * @component
 * @example
 * <Layout>
 *   <Home />
 * </Layout>
 */
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Navigation Bar */}
      <Nav />

      {/* Main Content Area - Renders the current route */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;