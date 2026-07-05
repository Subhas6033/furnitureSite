import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { staggerContainer, fadeUp, scaleIn } from "../../Animations/Animations";
import { products } from "../../Data/products";

/**
 * FeaturedProducts Component
 *
 * Displays a grid of featured products on the homepage.
 * Each product card is clickable and navigates to the product details page.
 * Uses the shared products data from Data/products.js for consistency.
 *
 * Features:
 * - Staggered fade-up animation on scroll into view
 * - Smooth hover effects with scale and overlay transitions
 * - Responsive grid layout (1-4 columns based on viewport)
 * - Discount and tag badges on product cards
 * - Rating display with star visualization
 *
 * @component
 * @example
 * <FeaturedProducts />
 */
const FeaturedProducts = () => {
  // Hook for programmatic navigation to product details
  const navigate = useNavigate();

  // Reference for scroll detection - enables animations when section comes into view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  /**
   * Navigate to product details page
   * Uses React Router's navigate function for client-side routing
   *
   * @param {string} productId - The unique identifier of the product
   * @returns {void}
   */
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  /**
   * Calculate discount percentage for display
   *
   * @param {number} originalPrice - The original price before discount
   * @param {number} currentPrice - The discounted price
   * @returns {number} Discount percentage rounded to nearest integer
   */
  const calculateDiscount = (originalPrice, currentPrice) => {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Background decorative element - subtle gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          viewport={{ once: true }}
          variants={staggerContainer(0.1, 0.1)}
        >
          <motion.div
            className="text-center md:text-left mb-6 md:mb-0"
            variants={fadeUp}
          >
            <span className="inline-block text-sm font-medium tracking-wider uppercase text-[#a97c2f] mb-3">
              Handpicked For You
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a] mb-4">
              Featured Pieces
            </h2>
            <p className="text-[#666] text-lg max-w-xl">
              Our most loved pieces, chosen by our design team for their
              exceptional craftsmanship and timeless appeal.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <button
              onClick={() => navigate("/products")}
              className="bg-[#123326] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0f2920] transition-all duration-300 hover:shadow-lg hover:shadow-[#123326]/20"
            >
              View All Products
            </button>
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          viewport={{ once: true }}
          variants={staggerContainer(0.1, 0.1)}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              custom={index}
              className="group cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Product Card Image Container */}
              <div className="relative overflow-hidden rounded-lg mb-4 bg-[#f5f5f5] aspect-[4/5]">
                {/* Product Image */}
                <motion.img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Discount Badge - Shows when product has a discount */}
                {product.originalPrice > product.price && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="absolute top-3 left-3 bg-[#ff3f3f] text-white text-xs font-semibold px-3 py-1 rounded shadow-md"
                  >
                    {calculateDiscount(product.originalPrice, product.price)}%
                    OFF
                  </motion.span>
                )}

                {/* Tag Badge - Shows promotional tags like "Best Seller" */}
                {product.tag && (
                  <span className="absolute top-3 right-3 bg-[#a97c2f] text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                    {product.tag}
                  </span>
                )}

                {/* Hover Overlay - Slides up on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* View Details Button - Appears on hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="bg-white text-[#1a1a1a] px-6 py-3 rounded-full text-sm font-semibold shadow-xl"
                  >
                    View Details
                  </motion.span>
                </motion.div>
              </div>

              {/* Product Information */}
              <div className="space-y-1.5">
                {/* Product Name */}
                <h3 className="text-[#1a1a1a] font-medium text-lg group-hover:text-[#a97c2f] transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Category */}
                <p className="text-[#888] text-sm">{product.category}</p>

                {/* Price Display */}
                <div className="flex items-center gap-2">
                  <span className="text-[#123326] font-bold text-xl">
                    {"$" + product.price.toLocaleString()}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-gray-400 line-through text-sm">
                      {"$" + product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Rating Display */}
                <div className="flex items-center gap-2 pt-1">
                  <div className="flex items-center gap-1">
                    {/* Rating number */}
                    <span className="text-[#ff9f00] text-sm font-medium">
                      {product.rating}
                    </span>
                    <span className="text-[#ff9f00]">★</span>
                    {/* Rating number */}
                    <span className="text-[#ff9f00] text-sm font-medium ml-1">
                      {product.rating}
                    </span>
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
      </div>
    </section>
  );
};

export default FeaturedProducts;
