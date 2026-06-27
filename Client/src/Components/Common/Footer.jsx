import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, navItemSlide } from "../../Animations/Animations";

const Footer = () => {
  const footerLinks = {
    Shop: ["Living Room", "Bedroom", "Dining Room", "Office", "Outdoor"],
    Furniture: ["Sofas & Sectionals", "Chairs", "Tables", "Beds", "Storage"],
    Company: ["About Us", "Careers", "Press", "Contact Us"],
    Support: [
      "FAQ",
      "Shipping & Returns",
      "Track Order",
      "Warranty",
      "Care Guide",
    ],
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--color-brand-footer-bg)",
        color: "var(--color-brand-footer-text)",
      }}
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10">
          {/* Brand Column */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2"
          >
            <motion.div variants={navItemSlide}>
              <Link
                to="/"
                className="font-serif text-2xl font-medium tracking-wide inline-block"
                style={{
                  color: "var(--color-brand-footer-heading)",
                }}
              >
                {import.meta.env.VITE_APP_NAME}
              </Link>
            </motion.div>
            <motion.p
              variants={navItemSlide}
              className="mt-4 text-sm leading-relaxed max-w-xs"
            >
              Thoughtfully crafted furniture that transforms houses into homes.
              Quality pieces built to last a lifetime.
            </motion.p>

            {/* Social Links */}
            <motion.div variants={navItemSlide} className="flex gap-3 mt-6">
              {[
                {
                  label: "Instagram",
                  icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                },
                {
                  label: "Pinterest",
                  icon: "M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z",
                },
                {
                  label: "Facebook",
                  icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                },
              ].map(({ label, icon }) => (
                <motion.button
                  key={label}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-colors"
                  style={{
                    borderColor: "var(--color-brand-footer-border)",
                    color: "var(--color-brand-footer-text)",
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={icon} />
                  </svg>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              variants={navItemSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: categoryIndex * 0.05 }}
            >
              <h4
                className="text-sm font-semibold uppercase tracking-wider mb-4"
                style={{
                  color: "var(--color-brand-footer-heading)",
                }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(/\s+/g, "-").replace(/[&]/g, "and")}`}
                      className="text-sm transition-colors inline-block"
                      style={{
                        color: "var(--color-brand-footer-text)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                          "var(--color-brand-footer-text-hover)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "var(--color-brand-footer-text)")
                      }
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 sm:mt-14 pt-8 sm:pt-10"
          style={{ borderTop: "1px solid var(--color-brand-footer-border)" }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 sm:gap-6">
            <div>
              <h4
                className="font-semibold text-base"
                style={{
                  color: "var(--color-brand-footer-heading)",
                }}
              >
                Stay in the loop
              </h4>
              <p className="text-sm mt-1">
                New arrivals, exclusive offers, and design inspiration.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 max-w-full sm:max-w-sm lg:max-w-md w-full lg:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-xl text-sm focus:outline-none transition-colors w-full"
                style={{
                  backgroundColor: "var(--color-brand-footer-surface)",
                  border: "1px solid var(--color-brand-footer-border)",
                  color: "var(--color-brand-footer-heading)",
                }}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap"
                style={{
                  backgroundColor: "var(--color-brand-accent)",
                  color: "white",
                }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid var(--color-brand-footer-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-xs">
          <p>© {new Date().getFullYear()} {import.meta.env.VITE_APP_NAME}. All rights reserved.</p>
          <div className="flex flex-wrap gap-3 sm:gap-5 justify-center sm:justify-end">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="transition-colors"
                  style={{ color: "var(--color-brand-footer-text)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color =
                      "var(--color-brand-footer-text-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      "var(--color-brand-footer-text)")
                  }
                >
                  {link}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
