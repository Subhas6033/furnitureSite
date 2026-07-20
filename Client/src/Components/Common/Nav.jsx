import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeDown,
  dropdownVariants,
  mobileMenuVariants,
  accordionVariants,
  buttonTap,
  navLinkVariants,
  navContainerVariants,
  navItemSlide,
  buttonGroupEntrance,
  dropdownItemVariants,
  mobileMenuItemVariants,
  badgeBounce,
  logoEntrance,
} from "../../Animations/Animations";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [furnitureOpen, setFurnitureOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setShopOpen(false);
    setFurnitureOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  const shopItems = [
    "Living Room",
    "Bedroom",
    "Dining Room",
    "Office",
    "Outdoor",
  ];
  const furnitureItems = [
    "Sofas & Sectionals",
    "Chairs",
    "Tables",
    "Beds",
    "Storage",
  ];

  // transparent on hero → brand teal glass once scrolled — never white
  const navBg = isScrolled ? "rgba(30, 90, 105, 0.92)" : "transparent";

  const navBorder = "none";

  // always white text — on hero (transparent bg) and on teal bg both are dark
  const onDark = true;

  // Social links from environment
  const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL || "";
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || "";

  return (
    <>
      {/* Backdrop strip so the transparent nav state always sits on a dark
          surface, even on pages with no hero image — keeps the nav looking
          and behaving identically across every route */}
      {!isScrolled && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-36 z-40 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            background:
              "linear-gradient(180deg, rgba(30,90,105,0.85) 0%, rgba(30,90,105,0.45) 55%, rgba(30,90,105,0) 100%)",
          }}
        />
      )}

      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial="hidden"
        animate="visible"
        variants={fadeDown}
        style={{
          backgroundColor: navBg,
          backdropFilter: isScrolled ? "blur(14px)" : "none",
          borderBottom: navBorder,
          boxShadow: "none",
          transition:
            "background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-14 sm:h-18">
            {/* Logo */}
            <motion.div
              variants={logoEntrance}
              initial="hidden"
              animate="visible"
              whileTap={buttonTap}
            >
              <Link
                to="/"
                className="font-serif text-2xl font-medium tracking-wide text-white"
              >
                {import.meta.env.VITE_APP_NAME}
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <motion.nav
              className="hidden md:flex items-center gap-1 rounded-full px-2 py-1.5"
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
              style={{
                backgroundColor: "var(--color-brand-overlay)",
                border: "1px solid var(--color-brand-border-glass)",
              }}
            >
              <NavLink to="/" active={isActive("/")} onDark={onDark}>
                Home
              </NavLink>

              <NavLink
                to="/products"
                active={isActive("/products")}
                onDark={onDark}
              >
                Products
              </NavLink>

              {["About Us", "Contact Us"].map((label) => {
                const path = `/${label.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <NavLink
                    key={label}
                    to={path}
                    active={isActive(path)}
                    onDark={onDark}
                  >
                    {label}
                  </NavLink>
                );
              })}
            </motion.nav>

            {/* Right actions - WhatsApp & Instagram */}
            <motion.div
              variants={buttonGroupEntrance}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center gap-2"
            >
              {/* WhatsApp */}
              <motion.button
                aria-label="WhatsApp"
                whileTap={buttonTap}
                className="relative p-2.5 rounded-full border transition-colors duration-300"
                style={{
                  borderColor: "rgba(255,255,255,0.30)",
                  color: "rgba(255,255,255,0.9)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.10)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
                onClick={() => window.open(whatsappUrl)}
              >
                <WhatsAppIcon />
              </motion.button>

              {/* Instagram */}
              <motion.button
                aria-label="Instagram"
                whileTap={buttonTap}
                className="p-2.5 rounded-full border transition-colors duration-300"
                style={{
                  borderColor: "rgba(255,255,255,0.30)",
                  color: "rgba(255,255,255,0.9)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.10)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
                onClick={() => window.open(instagramUrl)}
              >
                <InstagramIcon />
              </motion.button>
            </motion.div>

            {/* Mobile hamburger */}
            <motion.button
              whileTap={buttonTap}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-white"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <motion.span
                  className="block h-0.5 bg-current origin-center"
                  animate={
                    mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="block h-0.5 bg-current"
                  animate={
                    mobileOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 bg-current origin-center"
                  animate={
                    mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* teal-tinted panel to match the nav */}
              <div
                className="border-t px-4 sm:px-6 py-4 space-y-1"
                style={{
                  backgroundColor: "rgba(25, 78, 92, 0.97)",
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              >
                <motion.div
                  variants={mobileMenuItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    to="/"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    Home
                  </Link>
                </motion.div>

                {["Products", "About Us", "Contact Us"].map((label, i) => (
                  <motion.div
                    key={label}
                    variants={mobileMenuItemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: (i + 2) * 0.05 }}
                  >
                    <Link
                      to={`/${label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-3 py-2.5 rounded-xl text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Social Links */}
                <div className="pt-3 border-t border-white/10 flex gap-2">
                  <motion.button
                    whileTap={buttonTap}
                    className="px-4 py-2.5 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition-colors flex items-center gap-2"
                    onClick={() => window.open(whatsappUrl)}
                  >
                    <WhatsAppIcon />
                    <span className="text-sm">WhatsApp</span>
                  </motion.button>
                  <motion.button
                    whileTap={buttonTap}
                    className="px-4 py-2.5 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition-colors flex items-center gap-2"
                    onClick={() => window.open(instagramUrl)}
                  >
                    <InstagramIcon />
                    <span className="text-sm">Instagram</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

/* ── NavLink ── */
const NavLink = ({ to, active, children }) => (
  <motion.div variants={navItemSlide} whileTap={buttonTap}>
    <Link
      to={to}
      className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 inline-block"
      style={{
        backgroundColor: active ? "var(--color-brand-accent)" : "transparent",
        color: active ? "white" : "rgba(255,255,255,0.85)",
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = "var(--color-brand-overlay)";
          e.currentTarget.style.color = "white";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "rgba(255,255,255,0.85)";
        }
      }}
    >
      {children}
    </Link>
  </motion.div>
);

/* ── Chevron ── */
const ChevronDown = ({ open }) => (
  <motion.svg
    className="w-3.5 h-3.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.2 }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </motion.svg>
);

/* ── Dropdown ── */
const DropdownMenu = ({
  label,
  items,
  open,
  setOpen,
  buildPath,
  menuWidth = "w-48",
}) => (
  <div
    className="relative"
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
  >
    <motion.button
      className="flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 text-white/85 hover:text-white hover:bg-white/10"
      whileTap={buttonTap}
    >
      {label}
      <ChevronDown open={open} />
    </motion.button>

    <AnimatePresence>
      {open && (
        <motion.div
          className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div
            className={`bg-white rounded-2xl shadow-xl border border-stone-100 py-2 ${menuWidth} overflow-hidden`}
          >
            {items.map((item, i) => (
              <motion.div
                key={item}
                variants={dropdownItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: i * 0.03 }}
              >
                <Link
                  to={buildPath(item)}
                  className="block px-4 py-2.5 text-sm text-stone-600 hover:text-stone-900 transition-colors"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "var(--color-brand-primary-light)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "")
                  }
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/* ── Mobile accordion ── */
const MobileAccordion = ({ label, items, open, setOpen, buildPath }) => (
  <div>
    <button
      onClick={() => setOpen(!open)}
      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
    >
      {label}
      <ChevronDown open={open} />
    </button>
    <AnimatePresence>
      {open && (
        <motion.div
          variants={accordionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="overflow-hidden ml-3 mt-1 space-y-0.5"
        >
          {items.map((item, i) => (
            <motion.div
              key={item}
              variants={mobileMenuItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={buildPath(item)}
                className="block px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/* ── Social Icons ── */

const WhatsAppIcon = () => (
  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default Nav;
