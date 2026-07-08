import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  staggerContainer,
  fadeUp,
  fadeIn,
  scaleIn,
} from "../../Animations/Animations";
import { products, getAllCategories } from "../../Data/products";

const Products = () => {
  const navigate = useNavigate();
  const categories = getAllCategories();

  // Filter state
  const [activeCategory, setActiveCategory] = useState("All");

  // References for scroll-based animations
  const headerRef = useRef(null);
  const categoryScrollRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  // Per-category product counts (computed once)
  const categoryCounts = useMemo(() => {
    const counts = { All: products.length };
    categories.forEach((category) => {
      counts[category] = products.filter((p) => p.category === category).length;
    });
    return counts;
  }, [categories]);

  // Filtered products
  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleClearFilters = () => {
    setActiveCategory("All");
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Scroll the selected pill into view on mobile horizontal scroller
    const container = categoryScrollRef.current;
    if (container) {
      const activeEl = container.querySelector(`[data-category="${category}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  };

  const hasActiveFilters = activeCategory !== "All";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-stone-50 overflow-x-hidden mt-10"
    >
      {/* Header Section */}
      <motion.div
        ref={headerRef}
        className="bg-linear-to-br from-slate-100 via-stone-100 to-slate-200 py-12 md:py-16"
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"}
        variants={staggerContainer(0.1)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 mb-4">
              Our Collection
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl">
              Explore our curated selection of Entity Furnitures pieces, crafted
              with exceptional attention to detail and designed to transform
              your space.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Filters Section - Sticky */}
      <motion.div
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center gap-4">
            {/* Results Count */}
            <div className="hidden sm:flex items-center shrink-0 pr-4 mr-1 border-r border-slate-200">
              <span className="text-slate-600 text-sm whitespace-nowrap">
                <span className="font-semibold text-slate-800">
                  {filteredProducts.length}
                </span>{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </span>
            </div>

            {/* Category Pills - horizontally scrollable, no wrap */}
            <div
              ref={categoryScrollRef}
              className="flex-1 flex items-center gap-2 overflow-x-auto scrollbar-hide py-0.5 -mx-1 px-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <button
                data-category="All"
                onClick={() => handleCategoryClick("All")}
                className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
                  activeCategory === "All"
                    ? "bg-brand-primary text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
                aria-pressed={activeCategory === "All"}
              >
                All
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeCategory === "All"
                      ? "bg-white/20 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
                >
                  {categoryCounts.All}
                </span>
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  data-category={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 ${
                    activeCategory === category
                      ? "bg-brand-primary text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      activeCategory === category
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {categoryCounts[category]}
                  </span>
                </button>
              ))}
            </div>

            {/* Clear Filters */}
            <AnimatePresence>
              {hasActiveFilters && (
                <motion.button
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleClearFilters}
                  className="shrink-0 flex items-center gap-1 px-3 py-2 text-sm font-medium text-brand-accent hover:text-brand-accent-hover hover:bg-brand-accent/10 rounded-full transition-colors duration-200"
                >
                  <svg
                    className="w-3.5 h-3.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="whitespace-nowrap">Clear</span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Results Count - Mobile only */}
          <div className="sm:hidden mt-2">
            <span className="text-slate-500 text-xs">
              <span className="font-semibold text-slate-700">
                {filteredProducts.length}
              </span>{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Products Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Product Grid or Empty State */}
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={staggerContainer(0.08, 0.05)}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={fadeUp}
                  custom={index}
                  className="group cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                  layout
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Product Card */}
                  <div className="relative overflow-hidden rounded-2xl mb-4 bg-linear-to-br from-slate-100 to-slate-50 aspect-4/5 shadow-sm hover:shadow-xl transition-shadow duration-300">
                    {/* Product Image */}
                    <motion.img
                      src={(product.images && product.images[0]) || "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {/* Everything is Customizable Badge */}
                    <span className="absolute top-3 left-3 bg-brand-primary text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                      Everything is Customizable
                    </span>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />

                    {/* View Details Button on Hover */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-semibold shadow-xl"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductClick(product.id);
                        }}
                      >
                        Quick View
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-brand-accent uppercase tracking-wider">
                      {product.category}
                    </p>
                    <h3 className="text-slate-900 font-medium text-lg group-hover:text-brand-primary transition-colors duration-300 line-clamp-1">
                      {product.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              variants={scaleIn}
            >
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-slate-900 mb-2">
                No products found
              </h3>
              <p className="text-slate-500 mb-6">
                Try selecting a different category
              </p>
              <button
                onClick={handleClearFilters}
                className="bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/20 hover:-translate-y-1"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Products;
