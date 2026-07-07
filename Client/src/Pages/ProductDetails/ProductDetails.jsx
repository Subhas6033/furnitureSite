import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getProductById } from "../../Data/products";
import { staggerContainer, fadeUp } from "../../Animations/Animations";

/**
 * ProductDetails Component
 *
 * Displays product information with a simple photo gallery.
 * - Multiple photos displayed in a carousel/gallery
 * - Product specifications
 * - No color selection, angle views, or 3D view
 */
const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getProductById(productId);

  // Get all product images as a flat array
  const productImagesArray = product?.images?.filter(img => img && img.trim() !== "") || [];
  const [activeIndex, setActiveIndex] = useState(0);

  // Redirect to home if product not found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Product Not Found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-[#123326] text-white px-6 py-3 rounded-full hover:bg-[#0f2920] transition-colors"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  // Get current image
  const currentImage = productImagesArray[activeIndex] || productImagesArray[0];

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % productImagesArray.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + productImagesArray.length) % productImagesArray.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pt-20 md:pt-24"
    >
      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Left Column - Product Images Gallery */}
          <div className="space-y-3 sm:space-y-4">
            {/* Main Image Display */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#f5f5f5] rounded-lg overflow-hidden aspect-square"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-full h-full"
                >
                  <img
                    src={currentImage}
                    alt={`${product.name} - Image ${activeIndex + 1}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Everything is Customizable Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#123326] text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">
                Everything is Customizable
              </div>

              {/* Navigation Arrows - Only show if multiple images */}
              {productImagesArray.length > 1 && (
                <>
                  <button
                    onClick={goToPrev}
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg p-2 sm:p-3 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg p-2 sm:p-3 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter */}
              {productImagesArray.length > 1 && (
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/50 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm">
                  {activeIndex + 1} / {productImagesArray.length}
                </div>
              )}
            </motion.div>

            {/* Thumbnail Gallery */}
            {productImagesArray.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
                {productImagesArray.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden transition-all ${
                      activeIndex === index
                        ? "ring-2 ring-[#123326] ring-offset-2"
                        : "opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Product Information */}
          <div className="space-y-5 sm:space-y-6">
            {/* Product Title & Brand */}
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp}>
                <p className="text-sm text-[#2874f0] font-medium mb-1">
                  {product.category} &gt; {product.name}
                </p>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-2">
                  {product.name}
                </h1>
              </motion.div>

              {/* Rating & Reviews */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4"
              >
                <div className="flex items-center gap-1 bg-[#fff7e6] px-2 py-1 rounded">
                  <span className="text-[#ff9f00] font-bold">{product.rating}</span>
                  <span className="text-[#ff9f00]" aria-hidden="true">★</span>
                </div>
                <span className="text-gray-600 text-sm">{product.reviews} Reviews</span>
                <span className="text-gray-300 hidden sm:inline" aria-hidden="true">|</span>
                <span className="text-green-600 font-medium text-sm">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </motion.div>

              {/* Everything is Customizable */}
              <motion.div variants={fadeUp} className="mb-5 sm:mb-6">
                <span className="inline-block bg-[#123326] text-white text-sm font-medium px-4 py-2 rounded-full">
                  Everything is Customizable
                </span>
              </motion.div>

              {/* Product Description */}
              <motion.div variants={fadeUp} className="mb-5 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-[#1a1a1a] mb-3">
                  Product Description
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {product.description}
                </p>
              </motion.div>

              {/* Specifications */}
              <motion.div
                variants={fadeUp}
                className="border-t border-gray-200 pt-5 sm:pt-6"
              >
                <h3 className="text-base sm:text-lg font-semibold text-[#1a1a1a] mb-4">
                  Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="bg-[#f5f5f5] p-3 rounded-lg">
                        <p className="text-xs text-gray-500 mb-0.5">{key}</p>
                        <p className="text-sm font-medium text-[#1a1a1a]">
                          {value}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;