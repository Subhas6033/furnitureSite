import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop Component
 *
 * This component ensures that the page scrolls to the top whenever the route changes.
 * This provides a better user experience as users expect to see the top of a new page
 * when they navigate to it.
 *
 * Usage: Add this component inside the Router provider to automatically handle
 * scroll position on route changes.
 *
 * @example
 * // In your main.jsx or App.jsx:
 * <Router>
 *   <ScrollToTop />
 *   <App />
 * </Router>
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  /**
   * Effect: Scroll to top on route change
   *
   * Whenever the pathname changes (user navigates to a new page),
   * we scroll the window to the top (0, 0) with smooth behavior.
   * The behavior matches typical browser navigation patterns.
   */
  useEffect(() => {
    // Use smooth scroll for better visual experience
    // For instant scroll, use 'auto' instead of 'smooth'
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // This component doesn't render anything
  return null;
};

export default ScrollToTop;