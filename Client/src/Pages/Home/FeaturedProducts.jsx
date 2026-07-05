import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { staggerContainer, fadeUp } from "../../Animations/Animations";
import { products } from "../../Data/products";

/**
 * FeaturedProducts Component
 *
 * Displays a grid of featured products on the homepage.
 * Each product card is clickable and navigates to the product details page.
 * Uses the shared products data from Data/products.js for consistency.
 */
const FeaturedProducts = () => {
  // Hook for programmatic navigation
  const navigate = useNavigate();

  /**
   * Navigate to product details page
   * @param {string} productId - The unique identifier of the product
   */
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.1, 0.1)}
        >
          <motion.div className="text-center md:text-left mb-6 md:mb-0" variants={fadeUp}>
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
            <button className="bg-[#123326] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0f2920] transition-colors">
              View All Products
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer(0.1, 0.1)}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              className="group cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 bg-[#f5f5f5]">
                <img
                  // Using the first image from the product images array (front view)
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-[#a97c2f] text-white text-xs font-medium px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-[#1a1a1a] px-4 py-2 rounded-full text-sm font-medium">
                    View Details
                  </span>
                </div>
              </div>
              <h3 className="text-[#1a1a1a] font-medium mb-1 group-hover:text-[#a97c2f] transition-colors">
                {product.name}
              </h3>
              <p className="text-[#888] text-sm mb-2">{product.category}</p>
              <p className="text-[#123326] font-semibold">
                ${product.price.toLocaleString()}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;