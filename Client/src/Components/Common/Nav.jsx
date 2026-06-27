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
  underlineSlide,
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
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18">
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

              <DropdownMenu
                label="Shop"
                items={shopItems}
                open={shopOpen}
                setOpen={setShopOpen}
                buildPath={(item) =>
                  `/shop/${item.toLowerCase().replace(/\s+/g, "-")}`
                }
                onDark={onDark}
              />

              <DropdownMenu
                label="Furniture"
                items={furnitureItems}
                open={furnitureOpen}
                setOpen={setFurnitureOpen}
                buildPath={(item) =>
                  `/furniture/${item.toLowerCase().replace(/\s+/g, "-")}`
                }
                onDark={onDark}
                menuWidth="w-52"
              />

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

            {/* Right actions */}
            <motion.div
              variants={buttonGroupEntrance}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center gap-2"
            >
              <motion.button
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
              >
                <CartIcon />
                <motion.span
                  variants={badgeBounce}
                  initial="hidden"
                  animate="visible"
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 text-white text-[10px] font-semibold rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-brand-accent)" }}
                >
                  2
                </motion.span>
              </motion.button>

              <motion.button
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
              >
                <UserIcon />
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
                className="border-t px-6 py-4 space-y-1"
                style={{
                  backgroundColor: "rgba(25, 78, 92, 0.97)",
                  borderColor: "rgba(255,255,255,0.12)",
                }}
              >
                <motion.div variants={mobileMenuItemVariants} initial="hidden" animate="visible">
                  <Link
                    to="/"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    Home
                  </Link>
                </motion.div>

                <MobileAccordion
                  label="Shop"
                  items={shopItems}
                  open={shopOpen}
                  setOpen={setShopOpen}
                  buildPath={(item) =>
                    `/shop/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                />

                <MobileAccordion
                  label="Furniture"
                  items={furnitureItems}
                  open={furnitureOpen}
                  setOpen={setFurnitureOpen}
                  buildPath={(item) =>
                    `/furniture/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                />

                {["About Us", "Contact Us"].map((label, i) => (
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

                <div className="pt-3 border-t border-white/10 flex gap-2">
                  <motion.button
                    whileTap={buttonTap}
                    className="relative px-4 py-2.5 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition-colors"
                  >
                    <CartIcon />
                    <span
                      className="absolute -top-1 -right-1 w-4 h-4 text-white text-[10px] font-semibold rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-brand-accent)" }}
                    >
                      2
                    </span>
                  </motion.button>
                  <motion.button
                    whileTap={buttonTap}
                    className="px-4 py-2.5 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition-colors"
                  >
                    <UserIcon />
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

/* ── Icons ── */

const CartIcon = () => (
  <svg
    className="w-4.5 h-4.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);
const UserIcon = () => (
  <svg
    className="w-4.5 h-4.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

export default Nav;
