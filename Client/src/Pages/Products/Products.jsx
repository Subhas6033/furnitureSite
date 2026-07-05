import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { staggerContainer, fadeUp, fadeIn } from "../../Animations/Animations";
import { products, getAllCategories } from "../../Data/products";

/**
 * Products Component
 *
 * Displays all products in a filterable grid layout.
 * Features:
 * - Category filtering
 * - Price range filtering
 * - Search functionality
 * - Animated card reveals
 * - Responsive grid layout
 */
const Products = () => {
  const navigate = useNavigate();
  const categories = getAllCategories();

  // Filter states
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Sort products
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
        break;
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  /**
   * Navigate to product details page
   * @param {string} productId - The unique identifier of the product
   */
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pt-20 md:pt-24"
    >
      {/* Header Section */}
      <motion.div
        className="bg-[#f5f5f5] py-10 md:py-14"
        initial="hidden"
        animate="visible"
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

      {/* Filters Section */}
      <motion.div
        className="sticky top-16 md:top-20 z-30 bg-white border-b border-gray-100 py-4 shadow-sm"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123326]/20 focus:border-[#123326] transition-all"
              />
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

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123326]/20 focus:border-[#123326] bg-white cursor-pointer"
            >
              <option value="default">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === "All"
                  ? "bg-[#123326] text-white"
                  : "bg-[#f5f5f5] text-gray-600 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#123326] text-white"
                    : "bg-[#f5f5f5] text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Results count */}
        <motion.p
          className="text-gray-500 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </motion.p>

        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${searchQuery}-${sortBy}`}
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
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 bg-[#f5f5f5]">
                    <motion.img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full aspect-[4/5] object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                    {/* Discount Badge */}
                    {product.originalPrice > product.price && (
                      <span className="absolute top-3 left-3 bg-[#ff3f3f] text-white text-xs font-medium px-2 py-1 rounded">
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        % OFF
                      </span>
                    )}
                    {/* Tag Badge */}
                    {product.tag && (
                      <span className="absolute top-3 right-3 bg-[#a97c2f] text-white text-xs font-medium px-3 py-1 rounded-full">
                        {product.tag}
                      </span>
                    )}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white text-[#1a1a1a] px-5 py-2.5 rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {product.category}
                    </p>
                    <h3 className="text-[#1a1a1a] font-medium text-lg group-hover:text-[#a97c2f] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[#123326] font-semibold text-lg">
                        ${product.price.toLocaleString()}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-gray-400 line-through text-sm">
                          ${product.originalPrice.toLocaleString()}
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
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                No products found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                  setSortBy("default");
                }}
                className="bg-[#123326] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0f2920] transition-colors"
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