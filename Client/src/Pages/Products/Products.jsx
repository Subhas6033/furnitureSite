import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  staggerContainer,
  fadeUp,
  fadeIn,
  scaleIn,
} from "../../Animations/Animations";
import { products, getAllCategories } from "../../Data/products";

/**
 * Products Component
 *
 * Displays all products in a filterable grid layout with advanced filtering,
 * sorting, and search capabilities.
 *
 * Features:
 * - Category-based filtering
 * - Real-time search across product name, description, and category
 * - Multiple sort options (price, rating, name)
 * - Animated product card reveals with staggered animations
 * - Responsive grid layout (1-4 columns)
 * - Empty state handling with clear filters option
 *
 * @component
 * @example
 * <Products />
 *
 * @returns {JSX.Element} The rendered products listing page
 */
const Products = () => {
  const navigate = useNavigate();

  // Get all unique categories from products data
  const categories = getAllCategories();

  // Filter state - tracks current filter/sort selections
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Reference for scroll-based animations
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  /**
   * Filter and sort products based on current filter state
   *
   * This memoized function runs whenever filter criteria change,
   * ensuring optimal performance by avoiding unnecessary recalculations.
   *
   * @returns {Array} Filtered and sorted product array
   */
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by selected category
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by search query - searches across name, description, and category
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query),
      );
    }

    // Sort products based on selected sort option
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Default order - no sorting applied
        break;
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  /**
   * Calculate discount percentage for a product
   *
   * @param {number} originalPrice - Original price before discount
   * @param {number} currentPrice - Current discounted price
   * @returns {number} Rounded discount percentage
   */
  const calculateDiscount = (originalPrice, currentPrice) => {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  /**
   * Navigate to product details page
   *
   * @param {string} productId - Unique identifier of the product
   */
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  /**
   * Reset all filters to default values
   */
  const handleClearFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
    setSortBy("default");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white pt-20 md:pt-24"
    >
      {/* Header Section - Page title and description */}
      <motion.div
        ref={headerRef}
        className="bg-[#f5f5f5] py-10 md:py-14"
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"}
        variants={staggerContainer(0.1)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a] mb-3">
              Our Collection
            </h1>
            <p className="text-[#666] text-lg max-w-2xl">
              Explore our curated selection of premium furniture pieces, crafted
              with exceptional attention to detail and designed to transform
              your space.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Sticky Filters Section - Always visible while scrolling */}
      <motion.div
        className="sticky top-16 md:top-20 z-30 bg-white border-b border-gray-100 py-4 shadow-sm"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Sort Row */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123326]/20 focus:border-[#123326] transition-all"
                aria-label="Search products"
              />
              {/* Search Icon */}
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123326]/20 focus:border-[#123326] bg-white cursor-pointer"
              aria-label="Sort products"
            >
              <option value="default">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setActiveCategory("All")}
              className={
                activeCategory === "All"
                  ? "px-4 py-2 rounded-full text-sm font-medium transition-all bg-[#123326] text-white"
                  : "px-4 py-2 rounded-full text-sm font-medium transition-all bg-[#f5f5f5] text-gray-600 hover:bg-gray-200"
              }
              aria-pressed={activeCategory === "All"}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "px-4 py-2 rounded-full text-sm font-medium transition-all bg-[#123326] text-white"
                    : "px-4 py-2 rounded-full text-sm font-medium transition-all bg-[#f5f5f5] text-gray-600 hover:bg-gray-200"
                }
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Products Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Results Count */}
        <motion.p
          className="text-gray-500 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span>
            Showing {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""}
            {activeCategory !== "All" ? " in " + activeCategory : ""}
            {searchQuery ? " matching " + searchQuery : ""}
          </span>
        </motion.p>

        {/* Product Grid or Empty State */}
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={activeCategory + "-" + searchQuery + "-" + sortBy}
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
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Product Card */}
                  <div className="relative overflow-hidden rounded-lg mb-4 bg-[#f5f5f5] aspect-[4/5]">
                    {/* Product Image */}
                    <motion.img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {/* Discount Badge */}
                    {product.originalPrice > product.price && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className="absolute top-3 left-3 bg-[#ff3f3f] text-white text-xs font-semibold px-3 py-1 rounded shadow-md"
                      >
                        {calculateDiscount(
                          product.originalPrice,
                          product.price,
                        )}
                        % OFF
                      </motion.span>
                    )}

                    {/* Tag Badge */}
                    {product.tag && (
                      <span className="absolute top-3 right-3 bg-[#a97c2f] text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                        {product.tag}
                      </span>
                    )}

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />

                    {/* View Details Button on Hover */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="bg-white text-[#1a1a1a] px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg"
                      >
                        View Details
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-1.5">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {product.category}
                    </p>
                    <h3 className="text-[#1a1a1a] font-medium text-lg group-hover:text-[#a97c2f] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[#123326] font-bold text-lg">
                        {"$" + product.price.toLocaleString()}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-gray-400 line-through text-sm">
                          {"$" + product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <div className="flex items-center gap-1">
                        <span className="text-[#ff9f00] text-sm font-medium">
                          {product.rating}
                        </span>
                        <span className="text-[#ff9f00]">★</span>
                      </div>
                      <span className="text-gray-300">|</span>
                      <span className="text-gray-500 text-sm">
                        {product.reviews} reviews
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty State - When no products match filters */
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              variants={scaleIn}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                No products found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={handleClearFilters}
                className="bg-[#123326] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0f2920] transition-all hover:shadow-lg"
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
