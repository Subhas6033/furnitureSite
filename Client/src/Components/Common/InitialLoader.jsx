import { useState, useEffect } from "react";
import { CurtainLoader } from "./Loader";

/**
 * InitialLoader
 * ------------
 * Shows the CurtainLoader on EVERY page load throughout the application.
 *
 * Usage:
 *   <InitialLoader>
 *     <YourAppContent />
 *   </InitialLoader>
 */
export function InitialLoader({ children }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // CurtainLoader takes about holdMs + openMs + 300ms to unmount
    // Default: 1100 + 1900 + 300 = 3300ms
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <CurtainLoader>{children}</CurtainLoader>;
  }

  return <>{children}</>;
}