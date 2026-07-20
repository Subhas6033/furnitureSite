import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  navItemSlide,
} from "../../Animations/Animations";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 sm:gap-10">
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
                  url: import.meta.env.VITE_INSTAGRAM_URL,
                  icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                },
                {
                  label: "WhatsApp",
                  url: import.meta.env.VITE_WHATSAPP_URL,
                  icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.174-.149.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
                },
              ].map(({ label, url, icon }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
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
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
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
            ),
          )}

          {/* Location Column */}
          <motion.div
            variants={navItemSlide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{
                color: "var(--color-brand-footer-heading)",
              }}
            >
              Location
            </h4>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.2934385104213!2d88.3433437!3d22.530677999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02773f02dba4c1%3A0x1aaf990d5c689c57!2sEntity%20Furniture!5e0!3m2!1sen!2sin!4v1784568785247!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid var(--color-brand-footer-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-3 text-xs">
          {/* Left: Copyright */}
          <p style={{ color: "var(--color-brand-footer-text)" }}>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium">{import.meta.env.VITE_APP_NAME}</span>
            . All rights reserved.
          </p>

          {/* Center: Developer credit as a clickable pill */}
          <Link
            to="https://subhas.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{
              borderColor: "var(--color-brand-footer-border)",
              color: "var(--color-brand-footer-text)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color =
                "var(--color-brand-footer-text-hover)";
              e.currentTarget.style.borderColor =
                "var(--color-brand-footer-text-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-brand-footer-text)";
              e.currentTarget.style.borderColor =
                "var(--color-brand-footer-border)";
            }}
          >
            <span>Crafted</span>
            <span>by</span>
            <span className="font-semibold">Subhas</span>
          </Link>

          {/* Right: Policy links */}
          <div className="flex flex-wrap gap-3 sm:gap-5 justify-center sm:justify-end">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-px after:bg-current after:transition-all after:duration-200 hover:after:w-full"
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
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
